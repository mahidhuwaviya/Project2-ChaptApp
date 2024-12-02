import User from "../models/usersModel.js";
import bcrypt from "bcrypt";

async function handleUserRegister(req, res, next) {
  try {
    const { username, email, password } = req.body;
    const checkUsername = await User.findOne({ username: username });
    if (checkUsername)
      return res.json({ msg: "username already used", status: false });
    const checkUserEmail = await User.findOne({ email: email });
    if (checkUserEmail)
      return res.json({ msg: "email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({
      msg: "Account Created Successfully",
      status: true,
      user,
    });
  } catch (error) {
    next(error);
  }
}

async function handleUserLogin(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user)
      return res.json({ msg: "Incorrect username or password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect username or password", status: false });
    delete user.password;
    return res.json({ msg: "Logged In Succesfully", status: true, user });
  } catch (error) {
    next(error);
  }
}
async function handleUserSetAvatar(req, res, next) {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userDataUpdate = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userDataUpdate.isAvatarImageSet,
      image: userDataUpdate.avatarImage,
    });
  } catch (error) {
    next(error);
  }
}

export { handleUserRegister, handleUserLogin, handleUserSetAvatar };
