'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class HeroesImages extends Model {
    
    static associate(models) {
      
    }
  };
  HeroesImages.init({
    heroId: DataTypes.INTEGER,
    src: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'HeroesImages',
  });
  HeroesImages.associate = function(models) {
    HeroesImages.belongsTo(models.Superheroes, {
      foreignKey: 'heroId',
      onDelete: 'CASCADE'
    })
  };
  return HeroesImages;
};