const Chat = require("../../models/Chat.js");

async function getAllChats(req, res) {
  try {
    const chats = await Chat.find(); // Use the imported model
    res.status(200).json(chats); // Send the chats as a response
    console.log("fetch All Chats");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching chats", error });
  }
}

module.exports = { getAllChats };
