const ConsultingQuestion = require("../../../models/mysql/consulting-question");
const SpecificDomain = require("../../../models/mysql/specific-domain");

const yup = require("yup");

const schema = yup.object().shape({
  title: yup.string().trim().min(5).required(),
  content: yup.string().trim().min(5).required(),
});

const consultingQuestionResolver = {
  Query: {
    consultingQuestion: async (_, { id }) => {
      const consultingQuestion = await ConsultingQuestion.findOne({ id });
      return consultingQuestion.id;
    },
    getConsultingQuestions: async (_, { specificDomainId, offset }) => {
      const consultingQuestions = await ConsultingQuestion.findAll({
        where: { specificDomainId },
        offset: offset,
      });

      return consultingQuestions;
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

      await schema.validate({ title, content });

      const consultingQuestion = await ConsultingQuestion.create({
        userId,
        specificDomainId,
        title,
        content,
      });
      return consultingQuestion.id;
    },
  },
  ConsultingQuestion: {
    specificDomain: async ({ specificDomainId }) => {
      const specificDomain = await SpecificDomain.findOne({
        where: { id: specificDomainId },
      });
      return specificDomain;
    },
    consultingAnswers: async ({ id }, _, { loaders }) => {
      return loaders.consultingAnswerLoader.load(id);
    },
  },
};

module.exports = consultingQuestionResolver;
