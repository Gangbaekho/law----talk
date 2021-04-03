const Sequelize = require("sequelize");

const sequelize = require("../../util/mysql");

const GeneralRegion = sequelize.define(
  "general-region",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    regionName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = GeneralRegion;
