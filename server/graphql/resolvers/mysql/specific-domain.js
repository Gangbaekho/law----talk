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
    posts: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.postLoader.bySpecificDomainId.load(id);
    },
    videos: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.videoLoader.bySpecificDomainId.load(id);
    },
    schedules: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.scheduleLoader.bySpecificDomainId.load(id);
    },
    reviews: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.reviewLoader.bySpecificDomainId.load(id);
    },
    consultingQuestions: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.consultingQuestionLoader.bySpecificDomainId.load(id);
    },
    generalDomain: async ({ generalDomainId }, _, { dataLoaders }) => {
      return dataLoaders.generalDomainLoader.byGeneralDomainId.load(
        generalDomainId
      );
    },
  },
};

module.exports = SpecificDomainResolver;
