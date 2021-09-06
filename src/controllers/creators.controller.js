const catchAsync = require('../utils/catchAsync');
const { creatorsService } = require('../services');

const getCreatorById = catchAsync(async (req, res) => {
  const creator = await creatorsService.fetchCreatorById(req.params.id);
  res.send(creator);
});

const getAllCreators = catchAsync(async (req, res) => {
  const creators = creatorsService.fetchAllCreators(
    req.query.limit || 10,
    req.query.offset || 0
  );
  res.send(creators);
});

module.exports = {
  getCreatorById,
  getAllCreators,
};
