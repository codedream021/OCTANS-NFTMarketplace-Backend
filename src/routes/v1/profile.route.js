const express = require('express');
const validate = require('../../middlewares/validate');
const { profileController } = require('../../controllers');
const { profileValidation } = require('../../validations');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .put(
    auth,
    validate(profileValidation.updateProfile),
    profileController.updateProfile
  )
  .get(auth, profileController.getProfile);

module.exports = router;
