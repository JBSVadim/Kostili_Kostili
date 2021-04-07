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
      nickName: {
        field: "nickName",
        allowNull: false,
        type: Sequelize.STRING(128),
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      realName: {
        field: "realName",
        type: Sequelize.STRING(128)
      },
      description: {
        field: "description",
        type: Sequelize.TEXT
      },
      superpowers: {
        field: "superpowers",
        allowNull: false,
        type: Sequelize.STRING(128),
        validata: {
          notNull: true,
          notEmpty: true
        }
      },
      catchPrhase: {
        field: "catchPrhase",
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