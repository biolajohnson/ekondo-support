import express from "express";
import dotenv from "dotenv";
import Images from "./models/imagesModel.js";
import connectDB from "./config.js";
import multer from "multer";
import path from "path";
import pkg from "uuid";

const { v4: uuid } = pkg;

const app = express();
dotenv.config();
connectDB();
const port = process.env.PORT;
const __dirname__ = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
  app.use("/uploads", express.static(path.join(__dirname__, "/uploads")));
}

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.json());

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    const { originalname } = file;
    const id = uuid();
    const ext = path.extname(originalname);
    const filePath = `images/${id}${ext}`;
    cb(null, filePath);
  },
});

const upload = multer({ storage });

app.post("/help", upload.array("image"), async (req, res) => {
  console.log(req.files);
  const {
    name,
    email,
    text,
    dry_soil,
    yellow_leaves,
    holes_in_leaves,
  } = req.body;

  await Images.create({
    filePath: req.files[0].path,
    name,
    email,
    text,
    drySoil: dry_soil,
    yellowLeaves: yellow_leaves,
    holesInLeaves: holes_in_leaves,
  });

  res.send(`thanks! ${name}`);
});

app.get("/support", async (req, res) => {
  try {
    const images = await Images.find({});
    res.json(images);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

app.listen(port, () => console.log(`server is up on ${port}`));
