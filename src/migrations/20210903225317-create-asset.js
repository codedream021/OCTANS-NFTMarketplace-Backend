module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_by_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      content_type: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      yt_video_link: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      yt_video_id: {
        type: Sequelize.STRING(50),
        defaultValue: null,
      },
      status: {
        type: Sequelize.STRING(50),
        defaultValue: 'UNKNOWN_STATUS',
      },

      name: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: null,
      },
      on_sale: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      instant_sale_price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      royalty: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      contract_address: {
        type: Sequelize.STRING(100),
        defaultValue: null,
      },

      root_key: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preview_key: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbnail_key: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      encrypted_key: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qr_key: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preview_cid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumbnail_cid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      encrypted_cid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qr_cid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token_cid: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      drm_key: {
        type: Sequelize.STRING(1024),
        allowNull: false,
      },
      drm_key_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ek: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      mint_tx_id: {
        type: Sequelize.STRING,
        defaultValue: null,
      },

      job_id: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      job_status: {
        type: Sequelize.STRING(50),
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Assets');
  },
};
