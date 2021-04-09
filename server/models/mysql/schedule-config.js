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
  fifteenConsultingAvailableTimeFrom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fifteenConsultingAvailableTimeTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thirtyConsultingAvailableTimeFrom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thirtyConsultingAvailableTimeTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ScheduleConfig;
