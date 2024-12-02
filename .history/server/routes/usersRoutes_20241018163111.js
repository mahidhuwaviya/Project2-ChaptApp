import express from "express";
import handleUserRegister from "../controllers/usersControllers";
const router = express.Router();
router.post("/register", handleUserRegister);
export default router;
