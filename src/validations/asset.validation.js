const Joi = require('joi');

const getAssetById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  getAssetById,
};
