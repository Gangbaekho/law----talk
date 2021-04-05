const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const GeneralRegion = sequelize.define(
  "general-region",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    regionName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = GeneralRegion;
