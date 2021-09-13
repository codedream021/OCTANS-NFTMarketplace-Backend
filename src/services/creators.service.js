const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Account } = require('../models');
const { getUserObj } = require('../utils/helper');

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

  return getUserObj(profile);
};

const fetchAllCreators = async (limit, offset) => {
  const count = await Account.count();
  const creators = await Account.findAll({ offset, limit });

  return {
    items: creators.map((creator) => getUserObj(creator)),
    total_count: count,
    count: creators.length,
  };
};

module.exports = {
  fetchCreatorById,
  fetchAllCreators,
};
