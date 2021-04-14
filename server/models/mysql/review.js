const { DataTypes } = require("sequelize");

const User = require("./user");
const Lawyer = require("./lawyer");
const SpecificDomain = require("./specific-domain");

const sequelize = require("../../util/mysql");

const estimateKeywords = require("../../constants/estimateKeywords");

const Review = sequelize.define("review", {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  consultingType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  punctualTimeScore: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  kindnessScore: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  questionSolutionScore: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  averageScore: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
  },
  estimateKeyword: {
    type: DataTypes.ENUM(estimateKeywords),
    allowNull: false,
  },
});

module.exports = Review;
