import express from "express";
import dotenv from "dotenv";
import Complaints from "./model.js";
import connectDB from "./config.js";

const app = express();
dotenv.config();
connectDB();
const port = process.env.PORT;

app.use(express.static("public"));
app.use(express.json());

app.post("/help", async (req, res) => {
  const {
    nameData,
    emailData,
    textData,
    holesInLeavesData,
    yellowLeavesData,
    drySoilData,
  } = req.body;
  try {
    const options = {
      name: nameData,
      email: emailData,
      complaintText: textData,
      drySoil: drySoilData,
      holesInLeaves: holesInLeavesData,
      yellowLeaves: yellowLeavesData,
    };
    const complaint = await new Complaints(options);
    await complaint.save();
    res.json(complaint);
  } catch (e) {
    console.error(e);
    res.send(e);
  }
  console.log(req.body);
  res.end();
});
app.listen(port, () => console.log(`server is up on ${port}`));
