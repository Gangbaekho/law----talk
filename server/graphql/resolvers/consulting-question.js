const ConsultingQuestion = require("../../models/mysql/consulting-question");

const consultingQuestionResolver = {
  Query: {
    consultingQuestion: async (_, { id }) => {
      const consultingQuestion = await ConsultingQuestion.findOne({ id });
      return consultingQuestion.id;
    },
  },
};

module.exports = consultingQuestionResolver;
