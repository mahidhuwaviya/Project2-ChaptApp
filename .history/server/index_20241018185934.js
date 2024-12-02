import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/usersRoutes.js";
import run from "./connection.js";
dotenv.config();

const app = express();

run
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .catch((Err) => {
    console.log("ERR from mongoConnection", Err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Started on PORT: ${process.env.PORT}`);
});
