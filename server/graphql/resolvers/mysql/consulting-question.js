const yup = require("yup");

const schema = yup.object().shape({
  title: yup.string().trim().min(5).required(),
  content: yup.string().trim().min(5).required(),
});

const ITEMS_PER_PAGE = 10;

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
    getCurrentPageConsultingQuestions: async (
      _,
      { specificDomainId, page = 1 },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const totalItems = await models.ConsultingQuestion.count({
          where: { specificDomainId },
        });
        const consultingQuestions = await models.ConsultingQuestion.findAll({
          where: { specificDomainId },
          offset: (page - 1) * ITEMS_PER_PAGE,
          limit: ITEMS_PER_PAGE,
          order: [["id", "DESC"]],
        });
        return {
          consultingQuestions: consultingQuestions,
          currentPage: page,
          hasNextPage: ITEMS_PER_PAGE * page < totalItems,
          hasPreviousPage: page > 1,
          nextPage: page + 1,
          previousPage: page - 1,
          lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
        };
      });
    },
    getConsultingQuestionDetail: async (
      _,
      { consultingQuestionId },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const consultingQuestion = await models.ConsultingQuestion.findOne({
          where: { id: consultingQuestionId },
        });
        if (!consultingQuestion) {
          return null;
        }
        return consultingQuestion;
      });
    },
  },
  Mutation: {
    createConsultingQuestion: async (
      _,
      { consultingQuestionInput },
      { models, transaction }
    ) => {
      const { userId, specificDomainId, title, content } =
        consultingQuestionInput;

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
      return dataLoaders.specificDomainLoader.bySpecificDomainId.load(
        specificDomainId
      );
    },
    consultingAnswers: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.consultingAnswerLoader.byConsultingQuestionId.load(id);
    },
    user: async ({ userId }, _, { dataLoaders }) => {
      return dataLoaders.userLoader.byUserId.load(userId);
    },
  },
};

module.exports = consultingQuestionResolver;
