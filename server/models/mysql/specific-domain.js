const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");
const GeneralDomain = require("./general-domain");

const SpecificDomain = sequelize.define(
  "specific-domain",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    generalDomainId: {
      type: DataTypes.INTEGER.UNSIGNED,
      reference: {
        model: GeneralDomain,
        key: "id",
      },
    },
    domainName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lawyerCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    caseCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SpecificDomain;
