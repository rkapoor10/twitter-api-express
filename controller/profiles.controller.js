const profiles = require("../data/profilesData/profilesData");
exports.getProfiles = (req, res) => {
  res.send({ success: true, profiles});
};
exports.getProfile = (req, res) => {
  const { profileId } = req.params;
  const profilesArray = profiles;
  const profile = profilesArray.find(({ userId }) => {
    return profileId == userId;
  });
  if(!profile) return res.status(404).send({success:false, message:"profile not found"})
  res.send({ success: true, profile: profile });
};
