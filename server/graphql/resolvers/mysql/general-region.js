const yup = require("yup");

const schema = yup.object().shape({
  regionName: yup.string().trim().min(1).max(255).required(),
});

const generalRegionResolver = {
  Query: {
    generalRegion: async (_, { id }, { models }) => {
      const generalRegion = await models.GeneralRegion.findOne({
        where: { id },
      });
      return generalRegion;
    },
  },
  Mutation: {
    createGeneralRegion: async (_, { regionName }) => {
      await schema.validate({ regionName });

      const doesExist = await GeneralRegion.findOne({ where: { regionName } });

      if (doesExist) {
        const error = new Error("general region already exist");
        error.statusCode = 422;
        throw error;
      }

      const generalRegion = await GeneralRegion.create({ regionName });
      return generalRegion.id;
    },
  },
  GeneralRegion: {
    specificRegions: async ({ id }, _, { models }) => {
      const specificRegions = await models.SpecificRegion.findAll({
        where: { generalRegionId: id },
      });
      return specificRegions;
    },
  },
};

module.exports = generalRegionResolver;
