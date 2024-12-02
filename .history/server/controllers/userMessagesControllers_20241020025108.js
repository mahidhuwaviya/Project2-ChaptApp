import UserMessages from "../models/userMessageModel.js";

async function handleUseAddMessage(req, res, next) {
  try {
    const { from, to, message } = req.body;
    const data = await UserMessages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) {
      return res.json({ msg: "Message Added Successfully" });
    }
    return res.json({ msg: "Failed to add Message to DataBase" });
  } catch (ex) {
    next(ex);
  }
}

async function handleUseGetAllMessage(req, res, next) {
  try {
    const { from, to } = req.body;
    const messages = await UserMessages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updateAt: 1 });
    const projectedMessages = messages.map((message) => {
      console.log(message);
      console.log(message.sender.toString);
      console.log(from);
      return {
        fromSelf: message.sender.toString === from,
        message: message.message.text,
      };
    });
    console.log(projectedMessages);
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
}

export { handleUseAddMessage, handleUseGetAllMessage };
