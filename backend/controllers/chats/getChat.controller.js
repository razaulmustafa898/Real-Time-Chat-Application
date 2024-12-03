const Chat = require("../../models/Chat.js");

async function getAllChats(req, res) {
  try {
    const chats = await Chat.find();

    if (!chats.length) {
      return res.status(404).json({
        error: true,
        message: "No chats found",
      });
    }

    res.status(200).json({
      error: false,
      message: "Chats fetched successfully",
      chats,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error fetching chats",
      details: error.message,
    });
  }
}

module.exports = { getAllChats };
