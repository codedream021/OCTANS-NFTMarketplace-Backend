module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contractAddress: { type: Sequelize.STRING, required: true },
      tokenID: { type: Sequelize.INTEGER, required: true },
      tokenURI: { type: Sequelize.STRING, required: true },
      imageURL: { type: Sequelize.STRING },
      thumbnailPath: { type: Sequelize.STRING, defaultValue: '-' },
      symbol: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING }, // for search filter
      owner: { type: Sequelize.STRING },
      supply: { type: Sequelize.INTEGER, defaultValue: 1 },
      royalty: { type: Sequelize.DECIMAL, defaultValue: 0 },
      category: [{ type: Sequelize.STRING }],
      price: { type: Sequelize.DECIMAL, defaultValue: 0 }, // for most expensive in payment token
      paymentToken: { type: Sequelize.STRING, defaultValue: 'octa' }, // payment erc20 token address
      priceInUSD: { type: Sequelize.DECIMAL, defaultValue: 0 },
      lastSalePrice: { type: Sequelize.DECIMAL, defaultValue: 0 }, // for highest last sale price
      lastSalePricePaymentToken: {
        type: Sequelize.STRING,
        defaultValue: 'octa',
      }, // payment erc20 token address
      lastSalePriceInUSD: { type: Sequelize.DECIMAL, defaultValue: 0 },
      viewed: { type: Sequelize.INTEGER, defaultValue: 0 }, // for mostly viewed
      createdAt: { type: Sequelize.DATE }, // for recently created
      listedAt: { type: Sequelize.DATE }, // for recently listed
      soldAt: { type: Sequelize.DATE }, // for recently sold
      saleEndsAt: { type: Sequelize.DATE }, // for auction
      tokenType: { type: Sequelize.INTEGER, defaultValue: 721 },
      liked: { type: Sequelize.INTEGER, defaultValue: 0 },
      contentType: { type: Sequelize.STRING, defaultValue: 'image' },
      isAppropriate: { type: Sequelize.BOOLEAN, defaultValue: true },
      isFiltered: { type: Sequelize.BOOLEAN, defaultValue: false },
      blockNumber: { type: Sequelize.INTEGER, defaultValue: 0 },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Assets');
  },
};
