module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Assets', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn('Assets', 'createdAt');
  },
};
