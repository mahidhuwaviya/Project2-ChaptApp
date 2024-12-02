import express from "express";
import { handleUserMessage } from "../controllers/userMessagesControllers.js";
const router = express.Router();
router.post("/register", handleUserMessage);

export default router;
