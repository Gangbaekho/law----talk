const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const Lawyer = require("./lawyer");
const ConsultingQuestion = require("./consulting-question");

const ConsultingAnswer = sequelize.define("consulting-answer", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  lawyerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: Lawyer,
      key: "id",
    },
    allowNull: false,
  },
  mongoLawyerId: {
    type: DataTypes.STRING,
  },
  consultingQuestionId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: ConsultingQuestion,
      key: "id",
    },
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recommendationCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
  },
});

module.exports = ConsultingAnswer;
