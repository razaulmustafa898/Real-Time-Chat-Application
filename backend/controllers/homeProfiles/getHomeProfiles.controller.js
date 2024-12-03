const homeProfiles = require("../../models/homeProfiles");

async function getHomeProfiles(req, res) {
  try {
    const fetchHomeProfiles = await homeProfiles.find();
    const checkSuccess = res.status(200);
    const checkError = res.status(500) || res.status(404);
    if (checkSuccess) {
      checkSuccess.json({
        error: false,
        message: "Home profiles fetched successfully",
        homeProfiles: fetchHomeProfiles,
      });
    }
    if (checkError) {
      checkError.json({
        error: true,
        message: `Failed to fetch home profiles`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error fetching home profiles`,
      error,
    });
  }
}

module.exports = { getHomeProfiles };
