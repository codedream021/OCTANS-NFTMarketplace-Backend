const express = require('express');
const config = require('../../config/config');
const docsRoute = require('./docs.route');
const profileRoute = require('./profile.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/profile',
    route: profileRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
