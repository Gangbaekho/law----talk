const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const Lawyer = require("./lawyer");
const SpecificDomain = require("./specific-domain");

const LawyerSpecificDomain = sequelize.define(
  "lawyer-specific-domain",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    lawyerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Lawyer,
        key: "id",
      },
      allowNull: false,
    },
    specificDomainId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: SpecificDomain,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = LawyerSpecificDomain;
