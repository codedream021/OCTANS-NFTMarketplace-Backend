const Joi = require('joi');

const getCreatorById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  getCreatorById,
};
