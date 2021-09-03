module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      symbol: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      decimals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      eth_price: {
        type: Sequelize.DECIMAL,
        defaultValue: null,
      },
      usd_price: {
        type: Sequelize.DECIMAL,
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Tokens');
  },
};
