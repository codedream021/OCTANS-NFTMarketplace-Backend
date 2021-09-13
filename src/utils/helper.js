/* eslint-disable no-plusplus */
const { ipfsUrl } = require('./contants');

function generateNonce(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getUserObj(profile) {
  return {
    address: profile.address,
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
}

module.exports = {
  generateNonce,
  getUserObj,
};
