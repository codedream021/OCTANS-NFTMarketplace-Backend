const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { assetService } = require('../services');
const ApiError = require('../utils/ApiError');

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

const uploadAsset = catchAsync(async (req, res) => {
  if (!req.file)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Asset file is required.');

  const asset = await assetService.uploadAsset(req.file, req.user.id);
  res.send(asset);
});

const updateAssetInfo = catchAsync(async (req, res) => {
  const asset = await assetService.updateAssetInfo(req.body);
  res.send(asset);
});

module.exports = {
  getAssetById,
  getAllAssets,
  getMyAssets,
  getAssetsByCreator,
  uploadAsset,
  updateAssetInfo,
};
