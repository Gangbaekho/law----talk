const yup = require("yup");

const schema = yup.object().shape({
  domainName: yup.string().trim().min(1).max(255).required(),
});

const SpecificDomainResolver = {
  Query: {
    specificDomain: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const specificDomain = await models.SpecificDomain.findOne({
          where: { id },
        });
        return specificDomain;
      });
    },
  },
  Mutation: {
    createSpecificDomain: async (
      _,
      { generalDomainId, domainName },
      { models, transaction }
    ) => {
      await schema.validate({ domainName });

      return await transaction.serializableTransaction(async () => {
        const doesExist = await models.SpecificDomain.findOne({
          where: { domainName },
        });

        if (doesExist) {
          const error = new Error("specific domain already exist");
          error.statusCode = 422;
          throw error;
        }

        const specificDomain = await SpecificDomain.create({
          generalDomainId,
          domainName,
        });

        return specificDomain.id;
      });
    },
  },
  SpecificDomain: {
    posts: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const posts = await models.Post.findAll({
          where: { specificDomainId: id },
          limit: 10,
        });
        return posts;
      });
    },
    videos: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const videos = await models.Video.findAll({
          where: { specificDomainId: id },
          limit: 10,
        });
        return videos;
      });
    },
    schedules: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const schedules = await models.Schedule.findAll({
          where: { specificDomainId: id },
          limit: 10,
        });
        return schedules;
      });
    },
    reviews: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const reviews = await models.Review.findAll({
          where: { specificDomainId: id },
          limit: 10,
        });
        return reviews;
      });
    },
    consultingQuestions: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const consultingQuestions = await models.ConsultingQuestion.findAll({
          where: { specificDomainId: id },
          limit: 10,
        });
        return consultingQuestions;
      });
    },
    generalDomain: async ({ generalDomainId }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const generalDomain = await models.GeneralDomain.findOne({
          where: { id: generalDomainId },
        });
        return generalDomain;
      });
    },
  },
};

module.exports = SpecificDomainResolver;
