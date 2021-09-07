module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Accounts', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn('Accounts', 'createdAt');
  },
};
