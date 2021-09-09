const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Asset } = require('../models');

const fetchAssetById = async (id) => {
  const asset = await Asset.findOne({
    where: {
      id,
    },
  });

  if (!asset)
    throw new ApiError(
      httpStatus.NOT_FOUND,
      `No Asset exists against id: ${id}`
    );

  return asset;
};

const fetchAllAssets = async (limit, offset) => {
  const assets = await Asset.findAll({ offset, limit });

  return assets;
};

const fetchMyAssets = async (id, limit, offset) => {
  const assets = await Asset.findAll({
    where: { owner_id: id },
    offset,
    limit,
  });

  return assets;
};

const fetchAssetByCreatorId = async (id, limit, offset) => {
  const assets = await Asset.findAll({
    where: { created_by_id: id },
    offset,
    limit,
  });

  return assets;
};

module.exports = {
  fetchAssetById,
  fetchAllAssets,
  fetchMyAssets,
  fetchAssetByCreatorId,
};
