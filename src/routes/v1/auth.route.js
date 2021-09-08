const express = require('express');
const validate = require('../../middlewares/validate');
const { authController } = require('../../controllers');
const { authValidation } = require('../../validations');

const router = express.Router();

router
  .route('/')
  .post(validate(authValidation.createToken), authController.createAuthToken);

module.exports = router;
