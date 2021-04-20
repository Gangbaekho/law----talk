const User = require("./user");
const Lawyer = require("./lawyer");
const GeneralDomain = require("./general-domain");
const GeneralRegion = require("./general-region");
const SpecificDomain = require("./specific-domain");
const SpecificRegion = require("./specific-region");
const ConsultingQuestion = require("./consulting-question");
const ConsultingAnswer = require("./consulting-answer");
const Post = require("./post");
const Video = require("./video");
const Review = require("./review");
const ReviewReply = require("./review-reply");
const ScheduleConfig = require("./schedule-config");
const Schedule = require("./schedule");

const associateTables = () => {
  // USER
  User.hasMany(Schedule, { foreignKey: "userId" });
  User.hasMany(Review, { foreignKey: "userId" });
  User.hasMany(ConsultingQuestion, { foreignKey: "userId" });

  // LAWYER
  Lawyer.hasOne(ScheduleConfig, { foreignKey: "lawyerId" });
  Lawyer.hasMany(Post, { foreignKey: "lawyerId" });
  Lawyer.hasMany(Video, { foreignKey: "lawyerId" });
  Lawyer.hasMany(Schedule, { foreignKey: "lawyerId" });
  Lawyer.hasMany(Review, { foreignKey: "lawyerId" });
  Lawyer.hasMany(ReviewReply, { foreignKey: "lawyerId" });
  Lawyer.hasMany(ConsultingAnswer, { foreignKey: "lawyerId" });

  // GERERAL-DOMAIN
  GeneralDomain.hasMany(SpecificDomain, { foreignKey: "generalDomainId" });

  // GENERAL-REGION
  GeneralRegion.hasMany(SpecificRegion, { foreignKey: "generalRegionId" });

  // SPECIFIC-DOMAIN
  SpecificDomain.hasMany(Post, { foreignKey: "specificDomainId" });
  SpecificDomain.hasMany(Video, { foreignKey: "specificDomainId" });
  SpecificDomain.hasMany(Schedule, { foreignKey: "specificDomainId" });
  SpecificDomain.hasMany(Review, { foreignKey: "specificDomainId" });
  SpecificDomain.hasMany(ConsultingQuestion, {
    foreignKey: "specificDomainId",
  });
  SpecificDomain.belongsTo(GeneralDomain);

  // SPECIFIC-REGION
  SpecificRegion.belongsTo(GeneralRegion);
  // MongoDB로 이전해야 할 수 도 있음.

  // CONSULTING-ANSWER
  ConsultingAnswer.belongsTo(ConsultingQuestion);

  // CONSULTING-QUESTION
  ConsultingQuestion.hasMany(ConsultingAnswer);
  ConsultingQuestion.belongsTo(User);
  ConsultingQuestion.belongsTo(SpecificDomain);

  // POST
  Post.belongsTo(Lawyer);
  Post.belongsTo(SpecificDomain);

  // VIDEO
  Video.belongsTo(Lawyer);
  Video.belongsTo(SpecificDomain);

  // REVIEW
  Review.hasOne(ReviewReply, { foreignKey: "reviewId" });
  Review.belongsTo(User);
  Review.belongsTo(Lawyer);
  Review.belongsTo(SpecificDomain);

  // REVIEW-REPLY
  ReviewReply.belongsTo(Lawyer);
  ReviewReply.belongsTo(Review);

  // SCHEDULE-CONFIG
  ScheduleConfig.belongsTo(Lawyer);

  // SCHEDULE
  Schedule.belongsTo(User);
  Schedule.belongsTo(Lawyer);
  Schedule.belongsTo(SpecificDomain);
};

module.exports = associateTables;
