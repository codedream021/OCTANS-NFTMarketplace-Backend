const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Account, {
        foreignKey: 'maker_id',
        onDelete: 'CASCADE',
      });

      Order.belongsTo(models.Account, {
        foreignKey: 'taker_id',
        onDelete: 'CASCADE',
      });

      Order.belongsTo(models.Account, {
        foreignKey: 'created_by_id',
        onDelete: 'CASCADE',
      });

      Order.belongsTo(models.Asset, {
        foreignKey: 'token_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Order.init(
    {
      created_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      hash: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      sign_hash: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(50),
        defaultValue: 'CREATED',
      },

      maker_id: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      taker_id: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      created_by_id: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },

      side: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sale_kind: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      asset_contract_address: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      payment_token_address: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      token_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      wyvern_order: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
