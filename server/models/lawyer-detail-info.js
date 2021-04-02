const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const LawyerDetailInfo = sequelize.define("lawyer-detail-info", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  introductionTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  reviewCount: {
    type: Sequelize.INTEGER,
    default: 0,
  },
  //   companyName: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   },
  //   companyPhoneNumber: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   },
  companyAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 분야는 따로 테이블 만들어야 할 듯.
  career: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  certification: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  graduation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // 인증 관련도 따로 테이블 만들어야 할 듯.
});

module.exports = LawyerDetailInfo;
