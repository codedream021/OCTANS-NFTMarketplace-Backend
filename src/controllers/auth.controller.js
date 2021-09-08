const catchAsync = require('../utils/catchAsync');
const { authService } = require('../services');

const createAuthToken = catchAsync(async (req, res) => {
  const { address, signature } = req.body;
  const token = await authService.createAuthToken(address, signature);
  res.json({ token });
});

module.exports = {
  createAuthToken,
};
