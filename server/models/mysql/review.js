const { Sequelize, DataTypes } = require("sequelize");

const seqeulize = require("../../util/mysql");

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});
