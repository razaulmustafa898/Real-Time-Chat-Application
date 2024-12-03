// models/Chat.js
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    require: true,
  },
  timestamp: {
    type: Date,
    require: true,
  },
  isRead: Boolean,
  images: [String],
  videos: [String],
});

// Use existing model if it exists, else create a new one
const Chat =
  // mongoose.models.chats ||
  mongoose.model("chats", chatSchema);

module.exports = Chat;
