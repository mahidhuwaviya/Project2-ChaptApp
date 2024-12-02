import express from "express";
import {
  handleUserRegister,
  handleUserLogin,
  handleUserSetAvatar,
} from "../controllers/usersControllers.js";
const router = express.Router();
router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
router.post("/setAvator/:id", handleUserSetAvatar);

export default router;
