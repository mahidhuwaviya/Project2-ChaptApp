import User from "../models/userMessageModel.js";

async function handleUseAddMessage(req, res, next) {
  try {
  } catch (ex) {
    next(ex);
  }
}

async function handleUseGetAllMessage(req, res, next) {}

export { handleUseAddMessage, handleUseGetAllMessage };
