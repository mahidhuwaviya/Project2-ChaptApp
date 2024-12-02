import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Socket } from "socket.io";

import userRoutes from "./routes/usersRoutes.js";
import userMessagesRoutes from "./routes/userMessagesRoutes.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .catch((Err) => {
    console.log("ERR from mongoConnection", Err);
  });

app.use(cors());
// You can customize CORS settings:
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials
  })
);

app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/messages", userMessagesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Started on PORT: ${process.env.PORT}`);
});
