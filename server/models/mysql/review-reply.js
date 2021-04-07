const { DataTypes } = require("sequelize");

const Review = require("./review");
const Lawyer = require("./lawyer");

const sequelize = require("../../util/mysql");

const ReviewReply = sequelize.define("review-reply", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  lawyerId: {
    type: DataTypes.INTEGER,
    reference: {
      model: Lawyer,
      key: "id",
    },
    allowNull: false,
  },
  reviewId: {
    type: DataTypes.INTEGER,
    reference: {
      model: Review,
      key: "id",
    },
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = ReviewReply;
