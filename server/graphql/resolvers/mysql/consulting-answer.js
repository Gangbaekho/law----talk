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
      const {
        lawyerId,
        mongoLawyerId,
        consultingQuestionId,
        content,
      } = consultingAnswerInput;

      await schema.validate({ content });

      const consultingAnswer = await ConsultingAnswer.create({
        lawyerId,
        mongoLawyerId,
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
      return dataLoaders.consultingQuestionLoader.load(consultingQuestionId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.load(lawyerId);
    },
    mongoLawyer: async ({ mongoLawyerId }, _, { dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.load(mongoLawyerId);
    },
  },
};

module.exports = consultingAnswerResolver;
