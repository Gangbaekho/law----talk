const { DataTypes } = require("sequelize");

const sequelize = require("../../util/mysql");
const Lawyer = require("./lawyer");
const SpecificDomain = require("./specific-domain");

const postType = require("../../constants/postType");

const Post = sequelize.defind("post", {
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
  postType: {
    type: DataTypes.ENUM(postType),
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
  postImageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
  },
  recommandationCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
  },
});

module.exports = Post;