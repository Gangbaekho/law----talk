const yup = require("yup");
const schema = yup.object().shape({
  title: yup.string().trim().min(5).max(255).required(),
  content: yup.string().trim().min(5).required(),
});

const noticeResolver = {
  Query: {
    notice: async (_, { id }, { transaction, models }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const notice = await models.Notice.findOne({ where: { id } });
        return notice;
      });
    },
    getNotices: async (_, { offset = 0 }, { transaction, models }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const notices = await models.Notice.findAll({ offset });
        return notices;
      });
    },
  },
  Mutation: {
    createNotice: async (_, { noticeInput }, { transaction, models }) => {
      const { title, content } = noticeInput;

      await schema.validate({ title, content });

      return await transaction.serializableTransaction(async () => {
        const notice = await models.Notice.create({ title, content });
        return notice.id;
      });
    },
  },
};

module.exports = noticeResolver;
