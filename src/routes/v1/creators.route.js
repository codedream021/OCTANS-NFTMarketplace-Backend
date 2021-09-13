const express = require('express');
const validate = require('../../middlewares/validate');
const { creatorsController } = require('../../controllers');
const { creatorsValidation } = require('../../validations');

const router = express.Router();

router.route('/').get(creatorsController.getAllCreators);

router
  .route('/:id')
  .get(
    validate(creatorsValidation.getCreatorById),
    creatorsController.getCreatorById
  );
module.exports = router;
