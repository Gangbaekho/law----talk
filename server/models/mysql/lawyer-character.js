const Sequelize = require("sequelize");

const sequelize = require("../../util/mysql");

const LawyerCharacter = sequelize.define(
  "lawer-character",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = LawyerCharacter;
