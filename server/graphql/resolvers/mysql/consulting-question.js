const ConsultingQuestion = require("../../../models/mysql/consulting-question");
const SpecificDomain = require("../../../models/mysql/specific-domain");

const yup = require("yup");

const schema = yup.object().shape({
  title: yup.string().trim().min(5).required(),
  content: yup.string().trim().min(5).required(),
});

const consultingQuestionResolver = {
  Query: {
    consultingQuestion: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const consultingQuestion = await models.ConsultingQuestion.findOne({
          id,
        });
        return consultingQuestion;
      });
    },
    getConsultingQuestions: async (
      _,
      { specificDomainId, offset },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const consultingQuestions = await models.ConsultingQuestion.findAll({
          where: { specificDomainId },
          offset: offset,
        });

        return consultingQuestions;
      });
    },
  },
  Mutation: {
    createConsultingQuestion: async (
      _,
      { consultingQuestionInput },
      { models, transaction }
    ) => {
      const {
        userId,
        specificDomainId,
        title,
        content,
      } = consultingQuestionInput;

      await schema.validate({ title, content });

      return await transaction.serializableTransaction(async () => {
        const consultingQuestion = await models.ConsultingQuestion.create({
          userId,
          specificDomainId,
          title,
          content,
        });
        return consultingQuestion.id;
      });
    },
  },
  ConsultingQuestion: {
    specificDomain: async ({ specificDomainId }, _, { dataLoaders }) => {
      return dataLoaders.specificDomainLoader.load(specificDomainId);
    },
    consultingAnswers: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.consultingAnswerLoader.load(id);
    },
    user: async ({ userId }, _, { dataLoaders }) => {
      return dataLoaders.userLoader.load(userId);
    },
  },
};

module.exports = consultingQuestionResolver;
