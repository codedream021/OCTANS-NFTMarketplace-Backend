const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Account } = require('../models');
const { ipfsUrl } = require('../utils/contants');

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

  return {
    address,
    profile_img_url: `${ipfsUrl}${profile.image_cid}`,
    is_verified: profile.is_verified,
    user: {
      username: profile.username,
      name: profile.name,
      cover_url: `${ipfsUrl}${profile.cover_cid}`,
      bio: profile.bio,
      custom_url: profile.custom_url,
      yt_username: profile.yt_username,
    },
  };
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

  return {
    address,
    profile_img_url: `${ipfsUrl}${profile.image_cid}`,
    is_verified: profile.is_verified,
    user: {
      username: profile.username,
      name: profile.name,
      cover_url: `${ipfsUrl}${profile.cover_cid}`,
      bio: profile.bio,
      custom_url: profile.custom_url,
      yt_username: profile.yt_username,
    },
  };
};

module.exports = {
  fetchUserProfile,
  updateUserProfile,
};
