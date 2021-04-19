const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const GeneralDomain = sequelize.define(
  "general-domain",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    domainName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = GeneralDomain;
