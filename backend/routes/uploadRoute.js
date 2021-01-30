import multer from "multer";
import path from "path";
import express from "express";

const router = express.Router();

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

router.post("/", upload.single("image"), async (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
