import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Server } from "socket.io";
import http from "http";

import userRoutes from "./routes/usersRoutes.js";
import userMessagesRoutes from "./routes/userMessagesRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

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

server.listen(process.env.PORT, () => {
  console.log(`Server Started on PORT: ${process.env.PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

global.onlineUsers = new Map();

io.on("connection", (Socket) => {
  global.chatSocket = Socket;
  Socket.on("addUser", (userId) => {
    onlineUsers.set(userId, Socket.id);
  });
  Socket.on("sendMessage", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      Socket.to(sendUserSocket).emit("messageRecieve", data.message);
    }
  });
});
