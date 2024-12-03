const Chat = require("../../models/Chat.js");

async function getAllChats(req, res) {
  try {
    const chats = await Chat.find();
    const checkSuccess = res.status(200);
    const checkError = res.status(500) || res.status(404);
    if (checkSuccess) {
      checkSuccess.json({
        error: false,
        message: "Chats fetched successfully",
        chats: chats,
      });
    }
    if (checkError) {
      checkError.json({
        error: true,
        message: "Error fetching chats",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error fetching chats",
      error,
    });
  }
}

module.exports = { getAllChats };
