const { DataTypes } = require("sequelize");

const User = require("./user");
const Lawyer = require("./lawyer");
const SpecificDomain = require("./specific-domain");

const consultingTimeType = require("../../constants/consultingTimeType");

const sequelize = require("../../util/mysql");

const Schedule = sequelize.define("schedule", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: User,
      key: "id",
    },
    allowNull: false,
  },
  lawyerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: Lawyer,
      key: "id",
    },
    allowNull: false,
  },
  specificDomainId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: SpecificDomain,
      key: "id",
    },
    allowNull: false,
  },
  scheduleTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  consultingTime: {
    type: DataTypes.ENUM(consultingTimeType),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Schedule;
