import express from "express";
import {
  handleUserMessage,
  handleUseGetAllMessage,
} from "../controllers/userMessagesControllers.js";
const router = express.Router();
router.post("/", handleUserMessage);

export default router;
