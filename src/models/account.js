const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.hasMany(models.Asset, {
        foreignKey: 'created_by_id',
        as: 'creatorId',
      });

      Account.hasMany(models.Asset, {
        foreignKey: 'owner_id',
        as: 'ownerId',
      });

      Account.hasMany(models.Order, {
        foreignKey: 'maker_id',
        as: 'makerId',
      });

      Account.hasMany(models.Order, {
        foreignKey: 'taker_id',
        as: 'takerId',
      });

      Account.hasMany(models.Order, {
        foreignKey: 'created_by_id',
        as: 'creatorIdOrder',
      });
    }
  }
  Account.init(
    {
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      address: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
      },
      nonce: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      public_key: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      username: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      image_cid: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      cover_cid: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      custom_url: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      bio: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      yt_username: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'Account',
      timestamps: false,
    }
  );
  return Account;
};
