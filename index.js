import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import uploadRoute from "./Routes/uploadRoute.js";
import croudRoute from "./Routes/croudRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

// Database Connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database is connected");
  } catch (error) {
    console.log("MongoDB database connection faild");
  }
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/upload", uploadRoute);
app.use("/api/data", croudRoute);

app.listen(port, () => {
  connectDB();
  console.log(`server is running at http://localhost:${port}`);
});
