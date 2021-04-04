const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");
const GeneralDomain = require("./general-domain");

const SpecificDomain = sequelize.define(
  "specific-domain",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    generalDomainId: {
      type: DataTypes.INTEGER,
      reference: {
        model: GeneralDomain,
        key: "id",
      },
    },
    domainName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
