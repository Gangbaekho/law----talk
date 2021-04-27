const consultingAnswerLoader = require("./consulting-answer");
const consultingQuestionLoader = require("./consulting-question");
const lawyerLoader = require("./lawyer");
const mongoLawyerLoader = require("./mongo-lawyer");
const mongoScheduleLoader = require("./mongo-schedule");
const userLoader = require("./user");
const reviewReplyLoader = require("./review-reply");
const reviewLoader = require("./review");
const scheduleConfigLoader = require("./schedule-config");
const postLoader = require("./post");
const videoLoader = require("./video");
const scheduleLoader = require("./schedule");
const generalDomainLoader = require("./general-domain");
const generalRegionLoader = require("./general-region");
const specificRegionLoader = require("./specific-region");
const specificDomainLoader = require("./specific-domain");

module.exports = (models) => ({
  consultingAnswerLoader: consultingAnswerLoader(models),
  consultingQuestionLoader: consultingQuestionLoader(models),
  lawyerLoader: lawyerLoader(models),
  mongoLawyerLoader: mongoLawyerLoader(models),
  mongoScheduleLoader: mongoScheduleLoader(models),
  userLoader: userLoader(models),
  reviewReplyLoader: reviewReplyLoader(models),
  reviewLoader: reviewLoader(models),
  scheduleConfigLoader: scheduleConfigLoader(models),
  postLoader: postLoader(models),
  videoLoader: videoLoader(models),
  scheduleLoader: scheduleLoader(models),
  generalDomainLoader: generalDomainLoader(models),
  generalRegionLoader: generalRegionLoader(models),
  specificRegionLoader: specificRegionLoader(models),
  specificDomainLoader: specificDomainLoader(models),
});
