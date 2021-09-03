/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const config = require('../config/config');

const { env } = config;
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(config.db[env].use_env_variable, config);
} else {
  sequelize = new Sequelize(
    config.db[env].database,
    config.db[env].username,
    config.db[env].password,
    {
      host: config.db[env].host,
      dialect: config.db[env].dialect,
    }
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    // eslint-disable-next-line global-require
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
