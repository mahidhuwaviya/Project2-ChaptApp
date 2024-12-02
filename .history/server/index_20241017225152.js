import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .catch((Err) => {
    console.log("ERR from mongoConnection");
  });
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server Started on PORT: ${process.env.PORT}`);
});
