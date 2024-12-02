import User from "../models/usersModel.js";
import bcrypt from "bcrypt"

async function handleUserRegister(req, res) {
  const { username, email, password } = req.body;
    const checkUsername =await
}
export default handleUserRegister;
