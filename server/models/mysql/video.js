const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");
const Lawyer = require("./lawyer");
const SpecificDomain = require("./specific-domain");

const videoType = require("../../constants/videoType");

const Video = sequelize.define("video", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
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
  specificDomainId: {
    type: DataTypes.INTEGER.UNSIGNED,
    reference: {
      model: SpecificDomain,
      key: "id",
    },
    allowNull: false,
  },
  videoType: {
    type: DataTypes.ENUM(videoType),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoThumbNailUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
  },
  recommendationCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
  },
});

module.exports = Video;
