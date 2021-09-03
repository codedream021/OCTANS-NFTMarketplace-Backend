const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const config = require('../../config/config');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Octans NFT Marketplace API documentation',
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['src/routes/v1/*.js'],
});

router.use('/', swaggerUi.serve);
router.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

module.exports = router;
