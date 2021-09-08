const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');

module.exports = (req, res, next) => {
  try {
    const bearerToken = req.header('authorization');
    if (!bearerToken)
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid or expired jwt');

    const token = bearerToken.split(' ');
    const decoded = jwt.verify(token[1], config.jwtSecret);

    req.user = decoded.payload;
    next();
  } catch (error) {
    next(error);
  }
};
