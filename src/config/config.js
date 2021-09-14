const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .required(),
    PORT: Joi.number().default(3000),
    DATABASE_DEV: Joi.string().required().description('Dev DB name'),
    DATABASE_USERNAME_DEV: Joi.string()
      .required()
      .description('Dev DB username'),
    DATABASE_PASSWORD_DEV: Joi.string()
      .required()
      .description('Dev DB password'),
    DATABASE_HOST_DEV: Joi.string().required().description('Dev DB host'),
    DATABASE_PROD: Joi.string().required().description('DB name'),
    DATABASE_USERNAME_PROD: Joi.string().required().description('DB username'),
    DATABASE_PASSWORD_PROD: Joi.string().required().description('DB password'),
    DATABASE_HOST_PROD: Joi.string().required().description('DB host'),
    JWT_SECRET: Joi.string().required().description('JWT SECRET'),
    PINATA_API_KEY: Joi.string().required().description('PINATA_API_KEY'),
    PINATA_API_SECRET: Joi.string().required().description('PINATA_API_SECRET'),
    PINATA_GATEWAY_URL: Joi.string()
      .required()
      .description('PINATA_GATEWAY_URL'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  pinataApiKey: envVars.PINATA_API_KEY,
  pinataApiSecret: envVars.PINATA_API_SECRET,
  pinataGatewayUrl: envVars.PINATA_GATEWAY_URL,
  db: {
    development: {
      host: envVars.DATABASE_HOST_DEV,
      username: envVars.DATABASE_USERNAME_DEV,
      password: envVars.DATABASE_PASSWORD_DEV,
      database: envVars.DATABASE_DEV,
      dialect: 'postgres',
    },
    production: {
      host: envVars.DATABASE_HOST_PROD,
      username: envVars.DATABASE_USERNAME_PROD,
      password: envVars.DATABASE_PASSWORD_PROD,
      database: envVars.DATABASE_PROD,
      dialect: 'postgres',
    },
  },
};
