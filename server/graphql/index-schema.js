const { mergeTypeDefs } = require("@graphql-tools/merge");
const userType = require("./schemas/mysql/user");
const lawyerType = require("./schemas/mysql/lawyer");
const generalDomainType = require("./schemas/mysql/general-domain");
const generalRegionType = require("./schemas/mysql/general-region");
const specificDomainType = require("./schemas/mysql/specific-domain");
const specificRegionType = require("./schemas/mysql/specific-region");
const scheduleConfigType = require("./schemas/mysql/schedule-config");
const scheduleType = require("./schemas/mysql/schedule");
const replyType = require("./schemas/mysql/review");
const replyReplyType = require("./schemas/mysql/review-reply");
const consultingQuestionType = require("./schemas/mysql/consulting-question");
const consultingAnswerType = require("./schemas/mysql/consulting-answer");
const postType = require("./schemas/mysql/post");
const videoType = require("./schemas/mysql/video");
const mongoLawyerType = require("./schemas/mongo/lawyer");
const mongoScheduleType = require("./schemas/mongo/schedule");

const types = [
  userType,
  lawyerType,
  generalDomainType,
  generalRegionType,
  specificDomainType,
  specificRegionType,
  scheduleConfigType,
  scheduleType,
  replyType,
  replyReplyType,
  consultingQuestionType,
  consultingAnswerType,
  postType,
  videoType,
  mongoLawyerType,
  mongoScheduleType,
];

module.exports = mergeTypeDefs(types);
