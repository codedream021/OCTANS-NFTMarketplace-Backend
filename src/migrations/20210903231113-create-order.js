module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      created_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      hash: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      sign_hash: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(50),
        defaultValue: 'CREATED',
      },

      maker_id: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      taker_id: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      created_by_id: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },

      side: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sale_kind: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      asset_contract_address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      payment_token_address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      token_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      wyvern_order: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Orders');
  },
};
