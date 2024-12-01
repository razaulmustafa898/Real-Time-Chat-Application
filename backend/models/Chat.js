// models/Chat.js
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  message: String,
  timestamp: Date,
  isRead: Boolean,
  images: [String],
  videos: [String],
});

// Use existing model if it exists, else create a new one
const Chat =
  mongoose.models.projects ||
  mongoose.model("chats", chatSchema);

module.exports = Chat;
