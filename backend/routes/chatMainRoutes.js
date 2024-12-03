const express = require("express");
const router = express.Router();
const {
  getHomeProfiles,
} = require("../controllers/homeProfiles/getHomeProfiles.controller.js");
const {
  getAllChats,
} = require("../controllers/chats/getChat.controller.js");

router.route("/home-profiles").get(getHomeProfiles);
router.route("/get-all-chats").get(getAllChats);

module.exports = router;
