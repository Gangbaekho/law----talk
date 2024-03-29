const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
