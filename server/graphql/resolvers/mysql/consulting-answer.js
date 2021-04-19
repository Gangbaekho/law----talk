const ConsultingAnswer = require("../../../models/mysql/consulting-answer");
const ConsultingQuestion = require("../../../models/mysql/consulting-question");

const yup = require("yup");

const schema = yup.object().shape({
  content: yup.string().trim().min(5).required(),
});

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

      await schema.validate({ content });

      const consultingAnswer = await ConsultingAnswer.create({
        lawyerId,
        consultingQuestionId,
        content,
      });

      return consultingAnswer.id;
    },
  },

  ConsultingAnswer: {
    consultingQuestion: async (
      { consultingQuestionId },
      _,
      { dataLoaders }
    ) => {
      // const consultingQuestion = await ConsultingQuestion.findOne({
      //   where: { id: consultingQuestionId },
      // });
      // return consultingQuestion;
      return dataLoaders.consultingQuestionLoader.load(consultingQuestionId);
    },
  },
};

module.exports = consultingAnswerResolver;
