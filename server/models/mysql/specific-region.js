const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");
const GeneralRegion = require("./general-region");

const SpecificRegion = sequelize.define(
  "specific-region",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    generalRegionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      reference: {
        model: GeneralRegion,
        key: "id",
      },
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

module.exports = SpecificRegion;
