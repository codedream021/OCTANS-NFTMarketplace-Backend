const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Account } = require('../models');
const { getUserObj } = require('../utils/helper');

const fetchUserProfile = async (address) => {
  const profile = await Account.findOne({
    where: {
      address,
    },
  });

  if (!profile)
    throw new ApiError(
      httpStatus.NOT_FOUND,
      `No Profile exists against address: ${address}`
    );

  return getUserObj(profile);
};

const updateUserProfile = async (address, profileBody) => {
  // TODO upload image data to ipfs

  const profile = await Account.update(
    { ...profileBody },
    {
      where: {
        address,
        returning: true,
        plain: true,
      },
    }
  );

  if (profile[0] === 0)
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      `Error Updating Profile`
    );

  return getUserObj(profile);
};

module.exports = {
  fetchUserProfile,
  updateUserProfile,
};
