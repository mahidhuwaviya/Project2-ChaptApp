import express from "express";
import {
  handleUseAddMessage,
  handleUseGetAllMessage,
} from "../controllers/userMessagesControllers.js";
const router = express.Router();
router.post("/addMessage", handleUseAddMessage);
router.post("/GetMessage", handleUseGetAllMessage);

export default router;
