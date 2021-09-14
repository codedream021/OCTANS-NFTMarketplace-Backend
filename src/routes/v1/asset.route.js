const express = require('express');
const multer = require('multer');
const validate = require('../../middlewares/validate');
const { assetController } = require('../../controllers');
const { assetValidation } = require('../../validations');
const auth = require('../../middlewares/auth');

const upload = multer();
const router = express.Router();

router.route('/my').get(auth, assetController.getMyAssets);

router
  .route('/:id')
  .get(validate(assetValidation.getAssetById), assetController.getAssetById);

router.route('/').get(assetController.getAllAssets).post();

router
  .route('/upload')
  .post(auth, upload.single('file'), assetController.uploadAsset);

router.route('/creator/:creatorId').get(assetController.getAssetsByCreator);

module.exports = router;
