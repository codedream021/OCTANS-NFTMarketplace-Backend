const Joi = require('joi');

const updateProfile = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    bio: Joi.string().required(),
    custom_url: Joi.string().required(),
    yt_username: Joi.string().required(),
    image_data: Joi.string().required(),
    cover_data: Joi.string().required(),
  }),
};

module.exports = {
  updateProfile,
};
