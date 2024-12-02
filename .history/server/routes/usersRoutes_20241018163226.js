import express from "express";
import handleUserRegister from "../controllers/usersControllers.js";
const router = express.Router();
router.post("/register", handleUserRegister);
export default router;
