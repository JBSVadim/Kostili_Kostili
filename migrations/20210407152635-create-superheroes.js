'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        field: "nickname",
        allowNull: false,
        type: Sequelize.STRING(128),
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      real_name: {
        field: "realName",
        type: Sequelize.STRING(128)
      },
      description: {
        field: "description",
        type: Sequelize.TEXT
      },
      superpowers: {
        field: "abilitys",
        allowNull: false,
        type: Sequelize.STRING(128),
        validata: {
          notNull: true,
          notEmpty: true
        }
      },
      catch_prhase: {
        field: "catch_phrase",
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Superheroes');
  }
};