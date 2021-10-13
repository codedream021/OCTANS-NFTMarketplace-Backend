module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      address: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      nonce: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      public_key: {
        type: Sequelize.TEXT,
        defaultValue: null,
      },
      username: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      image_cid: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      cover_cid: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      bio: {
        type: Sequelize.TEXT,
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Accounts');
  },
};
