const catchAsync = require('../utils/catchAsync');
const { assetService } = require('../services');

const getAssetById = catchAsync(async (req, res) => {
  const asset = await assetService.fetchAssetById(req.params.id);
  res.send(asset);
});

const getAllAssets = catchAsync(async (req, res) => {
  const assets = assetService.fetchAllAssets(
    req.query.limit || 10,
    req.query.offset || 0
  );
  res.send(assets);
});

const getMyAssets = catchAsync(async (req, res) => {
  const assets = assetService.fetchMyAssets(
    req.user.id,
    req.query.limit || 10,
    req.query.offset || 0
  );
  res.send(assets);
});

const getAssetsByCreator = catchAsync(async (req, res) => {
  const assets = await assetService.fetchAssetByCreatorId(req.params.creatorId);
  res.send(assets);
});

module.exports = {
  getAssetById,
  getAllAssets,
  getMyAssets,
  getAssetsByCreator,
};
