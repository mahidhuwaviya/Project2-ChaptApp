import userMessage from "../models/userMessageModel.js";

async function handleUseAddMessage(req, res, next) {
  try {
    const { from, to, message } = req.body;
    const data= await 
  } catch (ex) {
    next(ex);
  }
}

async function handleUseGetAllMessage(req, res, next) {}

export { handleUseAddMessage, handleUseGetAllMessage };
