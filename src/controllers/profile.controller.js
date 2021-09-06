const httpStatus = require('http-status');

const catchAsync = require('../utils/catchAsync');
const { profileService } = require('../services');

const getProfile = catchAsync(async (req, res) => {
  const profile = await profileService.fetchUserProfile(req.user.address);
  res.send(profile);
});

const updateProfile = catchAsync(async (req, res) => {
  await profileService.updateUserProfile(req.user.address, req.body);
  res.sendStatus(httpStatus.OK);
});

module.exports = {
  getProfile,
  updateProfile,
};
