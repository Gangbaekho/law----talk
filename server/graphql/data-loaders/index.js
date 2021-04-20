const consultingAnswerLoader = require("./consulting-answer");
const consultingQuestionLoader = require("./consulting-question");
const lawyerLoader = require("./lawyer");
const mongoLawyerLoader = require("./mongo-lawyer");
const userLoader = require("./user");
const reviewReplyLoader = require("./review-reply");
const specificDomainLoader = require("./specific-domain");

module.exports = (models) => ({
  consultingAnswerLoader: consultingAnswerLoader(models),
  consultingQuestionLoader: consultingQuestionLoader(models),
  lawyerLoader: lawyerLoader(models),
  mongoLawyerLoader: mongoLawyerLoader(models),
  userLoader: userLoader(models),
  reviewReplyLoader: reviewReplyLoader(models),
  specificDomainLoader: specificDomainLoader(models),
});
