const consultingAnswerLoader = require("./consulting-answer");
const consultingQuestionLoader = require("./consulting-question");
const lawyerLoader = require("./lawyer");
const mongoLawyerLoader = require("./mongo-lawyer");
const userLoader = require("./user");

module.exports = (models) => ({
  consultingAnswerLoader: consultingAnswerLoader(models),
  consultingQuestionLoader: consultingQuestionLoader(models),
  lawyerLoader: lawyerLoader(models),
  mongoLawyerLoader: mongoLawyerLoader(models),
  userLoader: userLoader(models),
});
