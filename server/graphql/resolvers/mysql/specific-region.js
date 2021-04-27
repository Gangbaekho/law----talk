const yup = require("yup");

const schema = yup.object().shape({
  regionName: yup.string().trim().min(1).max(255).required(),
});

const SpecificRegionResolver = {
  Query: {
    specificRegion: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const specificRegion = await models.SpecificRegion.findOne({
          where: { id },
        });
        return specificRegion;
      });
    },
  },
  Mutation: {
    createSpecificRegion: async (
      _,
      { generalRegionId, regionName },
      { models, transaction }
    ) => {
      await schema.validate({ regionName });

      return await transaction.serializableTransaction(async () => {
        const doesExist = await models.SpecificRegion.findOne({
          where: { regionName },
        });

        if (doesExist) {
          const error = new Error("specific region already exist");
          error.statusCode = 422;
          throw error;
        }

        const specificRegion = await SpecificRegion.create({
          generalRegionId,
          regionName,
        });

        return specificRegion.id;
      });
    },
  },
  SpecificRegion: {
    generalRegion: async ({ generalRegionId }, _, { dataLoaders }) => {
      return dataLoaders.generalRegionLoader.byGeneralRegionId.load(
        generalRegionId
      );
    },
  },
};

module.exports = SpecificRegionResolver;
