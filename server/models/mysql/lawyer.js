const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const Lawyer = sequelize.define("lawyer", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  mongodbId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isPremium: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  priorityScore: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Lawyer;
