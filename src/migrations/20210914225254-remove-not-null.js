module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.changeColumn('Assets', 'root_key', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'key', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'preview_key', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'thumbnail_key', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'encrypted_key', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'qr_key', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'preview_cid', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'thumbnail_cid', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'encrypted_cid', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'qr_cid', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'token_cid', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'drm_key', {
        allowNull: true,
        type: Sequelize.STRING(1024),
      });
      await queryInterface.changeColumn('Assets', 'drm_key_id', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      await queryInterface.changeColumn('Assets', 'ek', {
        allowNull: true,
        type: Sequelize.STRING,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface) => {
    try {
      await queryInterface.changeColumn('Assets', 'root_key');
      await queryInterface.changeColumn('Assets', 'key');
      await queryInterface.changeColumn('Assets', 'preview_key');
      await queryInterface.changeColumn('Assets', 'thumbnail_key');
      await queryInterface.changeColumn('Assets', 'encrypted_key');
      await queryInterface.changeColumn('Assets', 'qr_key');
      await queryInterface.changeColumn('Assets', 'preview_cid');
      await queryInterface.changeColumn('Assets', 'thumbnail_cid');
      await queryInterface.changeColumn('Assets', 'encrypted_cid');
      await queryInterface.changeColumn('Assets', 'qr_cid');
      await queryInterface.changeColumn('Assets', 'token_cid');
      await queryInterface.changeColumn('Assets', 'drm_key');
      await queryInterface.changeColumn('Assets', 'drm_key_id');
      await queryInterface.changeColumn('Assets', 'ek');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
