const { Account, Asset } = require('../models');
const { getUserObj } = require('../utils/helper');

const fetchFeaturedCreators = async (offset, limit) => {
  // TODO: add creator key in model
  const count = await Account.count();
  const creators = await Account.findAll({ offset, limit });

  return {
    items: creators.map((creator) => getUserObj(creator)),
    total_count: count,
    count: creators.length,
  };
};

const fetchFeaturedAssets = async (offset, limit) => {
  const count = await Asset.count({
    where: {
      status: 'featured',
    },
  });
  const assets = await Asset.findAll({
    offset,
    limit,
    where: {
      status: 'featured',
    },
  });

  return {
    items: assets,
    total_count: count,
    count: assets.length,
  };
};

const fetchLiveAssets = async (offset, limit) => {
  const count = await Asset.count({
    where: {
      status: 'live',
    },
  });
  const assets = await Asset.findAll({
    offset,
    limit,
    where: {
      status: 'live',
    },
  });

  return {
    items: assets,
    total_count: count,
    count: assets.length,
  };
};

module.exports = {
  fetchFeaturedCreators,
  fetchFeaturedAssets,
  fetchLiveAssets,
};
