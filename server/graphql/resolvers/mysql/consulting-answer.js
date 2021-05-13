const yup = require("yup");

const schema = yup.object().shape({
  content: yup.string().trim().min(5).required(),
});

const consultingAnswerResolver = {
  Query: {
    consultingAnswer: async (_, { id }, { dataLoaders }) => {
      // return dataLoaders.consultingAnswerLoader.byConsultingAnswerId.load(id);
      return await transaction.repeatableReadTransaction(async () => {
        const consultingAnswer = await models.ConsultingAnswer.findOne({
          where: { id },
        });
        return consultingAnswer;
      });
    },
  },

  Mutation: {
    createConsultingAnswer: async (
      _,
      { consultingAnswerInput },
      { models, transaction }
    ) => {
      const { lawyerId, mongoLawyerId, consultingQuestionId, content } =
        consultingAnswerInput;

      await schema.validate({ content });

      return await transaction.serializableTransaction(async () => {
        const consultingAnswer = await models.ConsultingAnswer.create({
          lawyerId,
          mongoLawyerId,
          consultingQuestionId,
          content,
        });

        return consultingAnswer.id;
      });
    },
  },

  ConsultingAnswer: {
    consultingQuestion: async (
      { consultingQuestionId },
      _,
      { dataLoaders }
    ) => {
      return dataLoaders.consultingQuestionLoader.byConsultingQuestionId.load(
        consultingQuestionId
      );
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.byLawyerId.load(lawyerId);
    },
    mongoLawyer: async ({ mongoLawyerId }, _, { dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.byMongoLawyerId.load(mongoLawyerId);
    },
  },
};

module.exports = consultingAnswerResolver;
