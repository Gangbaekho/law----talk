const ConsultingQuestion = require("../../../models/mysql/consulting-question");

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
};

module.exports = consultingQuestionResolver;
