'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersLiteratures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usersLiteratures.init({
    userId: DataTypes.INTEGER,
    literatureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usersLiteratures',
  });
  return usersLiteratures;
};