const pinataSDK = require('@pinata/sdk');
const httpStatus = require('http-status');
const { Readable } = require('stream');
const ApiError = require('../utils/ApiError');
const { Asset } = require('../models');
const logger = require('../config/logger');
const config = require('../config/config');
const { fetchCreatorById } = require('./creators.service');
const { getUserObj } = require('../utils/helper');

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

const uploadAsset = async (assetFile, userId) => {
  try {
    const pinata = pinataSDK(config.pinataApiKey, config.pinataApiSecret);

    const stream = Readable.from(assetFile.buffer);
    stream.path = assetFile.originalname;

    const pinataFileResponse = await pinata.pinFileToIPFS(stream);
    const cid = pinataFileResponse.IpfsHash;

    const asset = await Asset.create({
      created_by_id: userId,
      owner_id: userId,
      content_type: assetFile.mimetype,
      status: 'PROCESSING',
      cid,
    });

    const creator = await fetchCreatorById(userId);
    const owner = await getUserObj(creator);

    asset.dataValues.owner = owner;
    return asset;
  } catch (error) {
    logger.error(error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  fetchAssetById,
  fetchAllAssets,
  fetchMyAssets,
  fetchAssetByCreatorId,
  uploadAsset,
};
