const express = require('express');
const config = require('../../config/config');
const docsRoute = require('./docs.route');
const profileRoute = require('./profile.route');
const creatorsRoute = require('./creators.route');
const accountRoute = require('./account.route');
const authRoute = require('./auth.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/profile',
    route: profileRoute,
  },
  {
    path: '/creators',
    route: creatorsRoute,
  },
  {
    path: '/account',
    route: accountRoute,
  },
  {
    path: '/auth',
    route: authRoute,
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
