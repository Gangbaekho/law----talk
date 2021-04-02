const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const GeneralDomain = sequelize.define(
  "general-domain",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    domainName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = GeneralDomain;
