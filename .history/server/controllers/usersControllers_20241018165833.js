import User from "../models/usersModel.js";
import bcrypt from "bcrypt";

async function handleUserRegister(req, res) {
  const { username, email, password } = req.body;
  const checkUsername = await User.findOne({ username: username });
  if (checkUsername)
    return res.json({ msg: "username already used", status: false });
  const chaeckEmail = await User.findOne({ email: email });
  if (checkUsername)
    return res.json({ msg: "email already used", status: false });
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    hashedPassword,
  });
}

export default handleUserRegister;
