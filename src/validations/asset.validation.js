const Joi = require('joi');

const getAssetById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const updateAsset = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    asset_id: Joi.number().min(0).required(),
    royalty: Joi.number().min(0).required(),
    instant_sale_price: Joi.number().min(0).required(),
    desc: Joi.string().required(),
    yt_video_link: Joi.string(),
    on_sale: Joi.boolean().default(true),
  }),
};

module.exports = {
  getAssetById,
  updateAsset,
};
