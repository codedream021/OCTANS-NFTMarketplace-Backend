const catchAsync = require('../utils/catchAsync');
const { profileService } = require('../services');

const getProfile = catchAsync(async (req, res) => {
  const profile = await profileService.fetchUserProfile(req.user.address);
  res.send(profile);
});

const updateProfile = catchAsync(async (req, res) => {
  const profile = await profileService.updateUserProfile(
    req.user.address,
    req.body
  );
  res.send(profile);
});

module.exports = {
  getProfile,
  updateProfile,
};
