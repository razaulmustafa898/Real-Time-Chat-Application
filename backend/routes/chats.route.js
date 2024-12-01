const express = require("express");
const {
  getAllChats,
} = require("../controllers/chats/getChat.controller.js");

const router = express.Router();

router.route("/get-all-chats").get(getAllChats); // fetch get all chats

module.exports = router;
