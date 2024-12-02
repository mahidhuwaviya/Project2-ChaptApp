import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import run from "./connection.js";
dotenv.config();

const app = express();
run();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server Started on PORT: ${process.env.PORT}`);
});
