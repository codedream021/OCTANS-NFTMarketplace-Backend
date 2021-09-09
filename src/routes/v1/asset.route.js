const express = require('express');
const validate = require('../../middlewares/validate');
const { assetController } = require('../../controllers');
const { assetValidation } = require('../../validations');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/my').get(auth, assetController.getMyAssets);

router
  .route('/:id')
  .get(validate(assetValidation.getAssetById), assetController.getAssetById);

router.route('/').get(assetController.getAllAssets);

router.route('/creator/:creatorId').get(assetController.getAssetsByCreator);

module.exports = router;
