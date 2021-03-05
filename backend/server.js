import express from "express";
import dotenv from "dotenv";
import complaintRoutes from "./routes/complaintRoute.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoute.js";
import connectDB from "./config/config.js";
import path from "path";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
app.use(express.json());
dotenv.config();
connectDB();
const port = process.env.PORT;
const __dirname__ = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
  app.use(express.static(path.join(__dirname__, "frontend", "build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname__, "../", "frontend", "build", "index.html")
    );
  });
  app.use("/uploads", express.static(path.join(__dirname__, "/uploads")));
}

app.use("/api/complaint", complaintRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.json());

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is up on ${port}`));
