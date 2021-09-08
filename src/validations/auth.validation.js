const Joi = require('joi');

const createToken = {
  body: Joi.object().keys({
    address: Joi.string().required(),
    signature: Joi.string().required(),
  }),
};

module.exports = {
  createToken,
};
