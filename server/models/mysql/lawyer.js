const Sequelize = require("sequelize");

const sequelize = require("../../util/mysql");

const Lawyer = sequelize.define("lawyer", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  mongodbId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isPremium: {
    type: Sequelize.CHAR(1),
    allowNull: false,
  },
});

module.exports = Lawyer;
