const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Token.init(
    {
      symbol: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      decimals: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      eth_price: {
        type: DataTypes.DECIMAL,
        defaultValue: null,
      },
      usd_price: {
        type: DataTypes.DECIMAL,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'Token',
    }
  );
  return Token;
};
