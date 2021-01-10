import express from "express";
import ObjectsToCsv from "objects-to-csv";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.static("public"));
app.use(express.json());

app.post("/help", async (req, res) => {
  const data = [];
  data.push(req.body);
  const csv = new ObjectsToCsv(data);

  await csv.toDisk("./list.csv", { append: true });

  console.log(req.body);
  res.end();
});
app.listen(port, () => console.log(`server is up on ${port}`));
