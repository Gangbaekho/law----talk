const { mergeResolvers } = require("@graphql-tools/merge");
const userResolver = require("./resolvers/mysql/user");
const lawyerResolver = require("./resolvers/mysql/lawyer");
const generalDomainResolver = require("./resolvers/mysql/general-domain");
const generalRegionResolver = require("./resolvers/mysql/general-region");
const specificDomainResolver = require("./resolvers/mysql/specific-domain");
const specificRegionResolver = require("./resolvers/mysql/specific-region");
const scheduleConfigResolver = require("./resolvers/mysql/schedule-config");
const scheduleResolver = require("./resolvers/mysql/schedule");
const reviewResolver = require("./resolvers/mysql/review");
const reviewReplyResolver = require("./resolvers/mysql/review-reply");
const consultingQuestionResolver = require("./resolvers/mysql/consulting-question");
const consultingAnswerResolver = require("./resolvers/mysql/consulting-answer");
const postResolver = require("./resolvers/mysql/post");
const videoResolver = require("./resolvers/mysql/video");
const noticeResolver = require("./resolvers/mysql/notice");
const mongoLawyerResolver = require("./resolvers/mongo/lawyer");
const mongoScheduleResolver = require("./resolvers/mongo/schedule");

const resolvers = [
  userResolver,
  lawyerResolver,
  generalDomainResolver,
  generalRegionResolver,
  specificDomainResolver,
  specificRegionResolver,
  scheduleConfigResolver,
  scheduleResolver,
  reviewResolver,
  reviewReplyResolver,
  consultingQuestionResolver,
  consultingAnswerResolver,
  postResolver,
  videoResolver,
  noticeResolver,
  mongoLawyerResolver,
  mongoScheduleResolver,
];

module.exports = mergeResolvers(resolvers);
