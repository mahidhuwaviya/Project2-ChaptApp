import express from "express";
import {
  handleUserRegister,
  handleUserLogin,
  handleUserSetAvatar,
  handleGetAllUsers,
} from "../controllers/usersControllers.js";
const router = express.Router();
router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
router.post("/setAvatar/:id", handleUserSetAvatar);
router.get("/allUsers/:id", handleGetAllUsers);

export default router;
