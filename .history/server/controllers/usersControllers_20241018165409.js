import User from "../models/usersModel.js";
import bcrypt from "bcrypt";

async function handleUserRegister(req, res) {
  const { username, email, password } = req.body;
  const checkUsername = await User.findOne({ username: username });
  if (checkUsername)
    return res.json({ msg: "username already used", status: false });
}
export default handleUserRegister;
