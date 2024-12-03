const mongoose = require("mongoose");

const HomeProfilesSchema = new mongoose.Schema({
  profileId: String,
  profileName: String,
  profileImage: String,
  recentMessage: String,
  isRecentRead: Boolean,
  timestamp: Date,
});

// Use existing model if it exists, else create a new one
const homeProfiles =
  // mongoose.models.homeProfiles ||
  mongoose.model("homeProfiles", HomeProfilesSchema);

module.exports = homeProfiles;
