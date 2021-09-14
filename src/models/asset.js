const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asset.belongsTo(models.Account, {
        foreignKey: 'created_by_id',
        onDelete: 'CASCADE',
      });

      Asset.belongsTo(models.Account, {
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
      });

      Asset.hasMany(models.Order, {
        foreignKey: 'token_id',
        as: 'tokenId',
      });
    }
  }
  Asset.init(
    {
      created_by_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content_type: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      yt_video_link: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      yt_video_id: {
        type: DataTypes.STRING(50),
        defaultValue: null,
      },
      status: {
        type: DataTypes.STRING(50),
        defaultValue: 'UNKNOWN_STATUS',
      },

      name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      description: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      on_sale: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      instant_sale_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      royalty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      contract_address: {
        type: DataTypes.STRING(100),
        defaultValue: null,
      },

      root_key: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
      key: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      preview_key: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      thumbnail_key: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      encrypted_key: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qr_key: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      cid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preview_cid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      thumbnail_cid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      encrypted_cid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qr_cid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      token_cid: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      drm_key: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      drm_key_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ek: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      mint_tx_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      job_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      job_status: {
        type: DataTypes.STRING(50),
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'Asset',
      timestamps: false,
    }
  );
  return Asset;
};
