const httpStatus = require('http-status');
const { ethers } = require('ethers');
const jwt = require('jsonwebtoken');

const { Account } = require('../models');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const config = require('../config/config');
const { nonceMsg } = require('../utils/contants');

const createAuthToken = async (address, signature) => {
  if (!ethers.utils.isAddress(address))
    throw new ApiError(httpStatus.PRECONDITION_FAILED, 'Address Invalid');

  try {
    const account = await Account.findOne({
      where: {
        address,
      },
    });

    if (!account)
      throw new ApiError(
        httpStatus.NOT_FOUND,
        `No Account exists against address: ${address}`
      );

    const msg = `${nonceMsg}${account.nonce}`;

    const signerAddress = await ethers.utils.verifyMessage(msg, signature);

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
