'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superheroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Superheroes.init({
    nickName: DataTypes.STRING,
    realName: DataTypes.STRING,
    description: DataTypes.TEXT,
    superpowers: DataTypes.STRING,
    catchPrhase: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Superheroes',
  });
  return Superheroes;
};