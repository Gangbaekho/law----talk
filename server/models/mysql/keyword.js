const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const Keyword = sequelize.define("keyword", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  keywordName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Keyword;
