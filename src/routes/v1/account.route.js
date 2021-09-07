const express = require('express');
const validate = require('../../middlewares/validate');
const { accountController } = require('../../controllers');
const { accountValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(
    validate(accountValidation.createAccount),
    accountController.createAccount
  );

router
  .route('/:address/nonce')
  .get(
    validate(accountValidation.getNonceByAddress),
    accountController.getNonce
  );

module.exports = router;
