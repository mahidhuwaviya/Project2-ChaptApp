import express from "express";
import {
  handleUseAddMessage,
  handleUseGetAllMessage,
} from "../controllers/userMessagesControllers.js";
const router = express.Router();
router.post("/", handleUseAddMessage);
router.post("/", handleUseGetAllMessage);

export default router;
