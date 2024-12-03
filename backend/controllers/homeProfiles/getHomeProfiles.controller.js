const homeProfiles = require("../../models/homeProfiles");

async function getHomeProfiles(req, res) {
  try {
    const fetchHomeProfiles = await homeProfiles.find();
    if (!fetchHomeProfiles.length) {
      return res.status(404).json({
        error: true,
        message: "No home profiles found",
      });
    }
    res.status(200).json({
      error: false,
      message: "Home profiles fetched successfully",
      homeProfiles: fetchHomeProfiles,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error fetching home profiles",
      details: error.message,
    });
  }
}

module.exports = { getHomeProfiles };
