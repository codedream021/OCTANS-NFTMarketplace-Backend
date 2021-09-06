const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Account } = require('../models');

const fetchCreatorById = async (id) => {
  const profile = await Account.findOne({
    where: {
      id,
    },
  });

  if (!profile)
    throw new ApiError(
      httpStatus.NOT_FOUND,
      `No Profile exists against id: ${id}`
    );

  return profile;
};

const fetchAllCreators = async (limit, offset) => {
  const creators = await Account.findAll({ offset, limit });

  return creators;
};

module.exports = {
  fetchCreatorById,
  fetchAllCreators,
};
