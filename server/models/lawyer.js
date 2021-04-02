const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Lawyer = sequelize.define("lawyer", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
  lawyerName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lawyerProfileImageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  companyPhoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Lawyer;
