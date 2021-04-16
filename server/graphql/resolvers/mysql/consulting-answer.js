const ConsultingAnswer = require("../../../models/mysql/consulting-answer");

const consultingAnswerResolver = {
  Query: {
    consultingAnswer: async (_, { id }) => {
      const consultingAnswer = await ConsultingAnswer.findOne({ id });
      return consultingAnswer.id;
    },
  },

  Mutation: {
    createConsultingAnswer: async (_, { consultingAnswerInput }) => {
      const { lawyerId, consultingQuestionId, content } = consultingAnswerInput;
      const consultingAnswer = await ConsultingAnswer.create({
        lawyerId,
        consultingQuestionId,
        content,
      });
      return consultingAnswer.id;
    },
  },
};

module.exports = consultingAnswerResolver;
