const consultingAnswerLoader = require("./consulting-answer");

module.exports = (models) => ({
  consultingAnswerLoader: consultingAnswerLoader(models),
});
