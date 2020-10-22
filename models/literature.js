"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Literature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Literature.belongsToMany(models.Users, {
        as: "users",
        through: {
          model: "usersLiteratures",
          as: "data",
        },
      });
    }
  }
  Literature.init(
    {
      uploadBy: DataTypes.INTEGER,
      title: DataTypes.STRING,
      publication: DataTypes.STRING,
      pages: DataTypes.INTEGER,
      ISBN: DataTypes.STRING,
      author: DataTypes.STRING,
      file: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      status: DataTypes.STRING,
      year: DataTypes.INTEGER,
      month: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Literature",
    }
  );
  return Literature;
};
