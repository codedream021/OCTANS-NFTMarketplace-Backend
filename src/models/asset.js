const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Asset.init(
    {
      contractAddress: { type: DataTypes.STRING, required: true },
      tokenID: { type: DataTypes.INTEGER, required: true },
      tokenURI: { type: DataTypes.STRING, required: true },
      imageURL: { type: DataTypes.STRING },
      thumbnailPath: { type: DataTypes.STRING, defaultValue: '-' },
      symbol: { type: DataTypes.STRING },
      name: { type: DataTypes.STRING }, // for search filter
      owner: { type: DataTypes.STRING },
      supply: { type: DataTypes.INTEGER, defaultValue: 1 },
      royalty: { type: DataTypes.DECIMAL, defaultValue: 0 },
      category: [{ type: DataTypes.STRING }],
      price: { type: DataTypes.DECIMAL, defaultValue: 0 }, // for most expensive in payment token
      paymentToken: { type: DataTypes.STRING, defaultValue: 'octa' }, // payment erc20 token address
      priceInUSD: { type: DataTypes.DECIMAL, defaultValue: 0 },
      lastSalePrice: { type: DataTypes.DECIMAL, defaultValue: 0 }, // for highest last sale price
      lastSalePricePaymentToken: {
        type: DataTypes.STRING,
        defaultValue: 'octa',
      }, // payment erc20 token address
      lastSalePriceInUSD: { type: DataTypes.DECIMAL, defaultValue: 0 },
      viewed: { type: DataTypes.INTEGER, defaultValue: 0 }, // for mostly viewed
      createdAt: { type: DataTypes.DATE }, // for recently created
      listedAt: { type: DataTypes.DATE }, // for recently listed
      soldAt: { type: DataTypes.DATE }, // for recently sold
      saleEndsAt: { type: DataTypes.DATE }, // for auction
      tokenType: { type: DataTypes.INTEGER, defaultValue: 721 },
      liked: { type: DataTypes.INTEGER, defaultValue: 0 },
      contentType: { type: DataTypes.STRING, defaultValue: 'image' },
      isAppropriate: { type: DataTypes.BOOLEAN, defaultValue: true },
      isFiltered: { type: DataTypes.BOOLEAN, defaultValue: false },
      blockNumber: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: 'Asset',
      timestamps: true,
    }
  );
  return Asset;
};
