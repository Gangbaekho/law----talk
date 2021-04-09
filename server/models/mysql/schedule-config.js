const { DataTypes } = require("sequelize");

const Lawyer = require("./lawyer");

const sequelize = require("../../util/mysql");

const ScheduleConfig = sequelize.define("schedule-config", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  lawyerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: Lawyer,
      key: "id",
    },
    allowNull: false,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ScheduleConfig;
