const ConsultingQuestion = require("../../../models/mysql/consulting-question");

const consultingQuestionResolver = {
  Query: {
    consultingQuestion: async (_, { id }) => {
      const consultingQuestion = await ConsultingQuestion.findOne({ id });
      return consultingQuestion.id;
    },
  },
  Mutation: {
    createConsultingQuestion: async (_, { consultingQuestionInput }) => {
      const {
        userId,
        specificDomainId,
        title,
        content,
      } = consultingQuestionInput;
      const consultingQuestion = await ConsultingQuestion.create({
        userId,
        specificDomainId,
        title,
        content,
      });
      return consultingQuestion.id;
    },
  },
};

module.exports = consultingQuestionResolver;
