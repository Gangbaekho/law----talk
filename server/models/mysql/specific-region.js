const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");
const GeneralRegion = require("./general-region");

const SpecificRegion = sequelize.define(
  "specific-region",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    generalRegionId: {
      type: DataTypes.INTEGER,
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
