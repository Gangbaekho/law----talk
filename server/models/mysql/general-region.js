const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const GeneralRegion = sequelize.define(
  "general-region",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    regionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = GeneralRegion;
