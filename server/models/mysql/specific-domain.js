const Sequelize = require("sequelize");

const sequelize = require("../../util/mysql");

const SpecificDomain = sequelize.define(
  "specific-domain",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    domainName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    lawyerCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    caseCount: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SpecificDomain;
