const httpStatus = require('http-status');
const { ethers } = require('ethers');
const jwt = require('jsonwebtoken');

const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const config = require('../config/config');

const { fetchUserProfile } = require('./profile.service');

const createAuthToken = async (address, signature) => {
  if (!ethers.utils.isAddress(address))
    throw new ApiError(httpStatus.PRECONDITION_FAILED, 'Address Invalid');

  try {
    const account = await fetchUserProfile(address);

    const msg = `${account.nonce}`;
    const signerAddress = await ethers.utils.verifyMessage(msg, signature);
    if (signerAddress !== address) {
      return false;
    }

    if (address.toLowerCase() !== signerAddress.toLowerCase())
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'Signature verification failed'
      );

    const token = await jwt.sign(
      {
        payload: {
          id: account.id,
          address: signerAddress,
        },
      },
      config.jwtSecret
    );

    return token;
  } catch (error) {
    logger.error(error);
    throw new ApiError(
      error?.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
      error?.message || 'Internal server error'
    );
  }
};

module.exports = {
  createAuthToken,
};
