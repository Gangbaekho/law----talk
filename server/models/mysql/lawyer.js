const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const Lawyer = sequelize.define("lawyer", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  mongodbId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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
