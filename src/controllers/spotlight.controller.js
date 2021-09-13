const catchAsync = require('../utils/catchAsync');
const { spotlightService } = require('../services');

const getFeatruedCreators = catchAsync(async (req, res) => {
  const creators = await spotlightService.fetchFeaturedCreators(
    req.query.limit || 10,
    req.query.offset || 0
  );
  res.send(creators);
});

const getFeatruedAssets = catchAsync(async (req, res) => {
  const assets = await spotlightService.fetchFeaturedAssets(
    req.query.limit || 10,
    req.query.offset || 0
  );
  res.send(assets);
});

const getLiveAssets = catchAsync(async (req, res) => {
  const assets = await spotlightService.fetchLiveAssets(
    req.query.limit || 10,
    req.query.offset || 0
  );
  res.send(assets);
});

module.exports = {
  getFeatruedCreators,
  getFeatruedAssets,
  getLiveAssets,
};
