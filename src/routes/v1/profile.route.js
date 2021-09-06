const express = require('express');
const validate = require('../../middlewares/validate');
const { profileController } = require('../../controllers');
const { profileValidation } = require('../../validations');

const router = express.Router();

router
  .route('/profile')
  .put(validate(profileValidation.updateProfile))
  .get(profileController.getProfile);

module.exports = router;
