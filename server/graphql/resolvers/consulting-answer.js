const ConsultingAnswer = require("../../models/mysql/consulting-answer");

const consultingAnswerResolver = {
  Query: {
    consultingAnswer: async (_, { id }) => {
      const consultingAnswer = await ConsultingAnswer.findOne({ id });
      return consultingAnswer.id;
    },
  },
};

module.exports = consultingAnswerResolver;
