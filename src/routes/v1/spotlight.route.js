const express = require('express');
const { spotlightController } = require('../../controllers');

const router = express.Router();

router.route('/creators/featured').get(spotlightController.getFeatruedCreators);
router.route('/assets/featured').get(spotlightController.getFeatruedAssets);
router.route('/assets/live').get(spotlightController.getLiveAssets);

module.exports = router;
