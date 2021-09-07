const httpStatus = require('http-status');
const { ethers } = require('ethers');
const faker = require('faker');

const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const helper = require('../utils/helper');

const { Account } = require('../models');

const createAccount = async (address) => {
  if (!ethers.utils.isAddress(address))
    throw new ApiError(httpStatus.PRECONDITION_FAILED, 'Address Invalid');

  try {
    const randomuUerName = faker.internet.userName();
    await Account.create({
      address,
      nonce: helper.generateNonce(20),
      username: randomuUerName,
    });
  } catch (error) {
    logger.error(error);
    throw new ApiError(httpStatus.CONFLICT, 'Address already registered');
  }
};

const getNonceByAddress = async (address) => {
  const account = await Account.findOne({
    where: { address },
    attributes: ['nonce'],
  });

  if (!account) throw new ApiError(httpStatus.NOT_FOUND, 'Address not exists');

  return account;
};

module.exports = {
  createAccount,
  getNonceByAddress,
};
