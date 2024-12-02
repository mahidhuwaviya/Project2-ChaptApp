import mongoose from "mongoose";
const userMessageSchema = new mongoose.Schema({
  message: {
    text: {
      type: String,
      required: true,
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
});
const UserMessages = mongoose.model("UserMessages", userMessageSchema);
export default UserMessages;
