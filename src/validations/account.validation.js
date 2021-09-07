const Joi = require('joi');

const getNonceByAddress = {
  params: Joi.object().keys({
    address: Joi.string().required(),
  }),
};

const createAccount = {
  body: Joi.object().keys({
    address: Joi.string().required(),
  }),
};

module.exports = {
  getNonceByAddress,
  createAccount,
};
