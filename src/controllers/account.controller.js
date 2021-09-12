const catchAsync = require('../utils/catchAsync');
const { accountService } = require('../services');

const createAccount = catchAsync(async (req, res) => {
  const account = await accountService.createAccount(req.body.address);
  res.json({ account });
});

const getNonce = catchAsync(async (req, res) => {
  const nonce = await accountService.getNonceByAddress(req.params.address);
  res.send(nonce);
});

module.exports = {
  createAccount,
  getNonce,
};
