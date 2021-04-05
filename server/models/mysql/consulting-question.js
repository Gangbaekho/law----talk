const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");

const User = require("./user");
const SpecificDomain = require("./specific-domain");

const ConsultingQuestion = sequelize.define("consulting-question", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: User,
      key: "id",
    },
    allowNull: false,
  },
  specificDomain: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: SpecificDomain,
      key: "id",
    },
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  viewCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
  },
});

module.exports = ConsultingQuestion;
