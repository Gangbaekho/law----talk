const consultingAnswerLoader = require("./consulting-answer");
const consultingQuestionLoader = require("./consulting-question");

module.exports = (models) => ({
  consultingAnswerLoader: consultingAnswerLoader(models),
  consultingQuestionLoader: consultingQuestionLoader(models),
});
