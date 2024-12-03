const homeProfiles = require("../../models/homeProfiles");

async function getHomeProfiles(req, res) {
  try {
    const fetchHomeProfiles = await homeProfiles.find();
    const checkSuccess = res.status(200);
    if (checkSuccess) {
      checkSuccess.json(fetchHomeProfiles);
    } else {
      res
        .status(500)
        .json({ message: `Failed to fetch home profiles` });
    }
    // res.status(200).json(fetchHomeProfiles);
  } catch (error) {
    res.status(500).json({
      message: `Error fetching home profiles`,
      error,
    });
  }
}

module.exports = { getHomeProfiles };
