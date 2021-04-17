const SpecificRegion = require("../../../models/mysql/specific-region");
const yup = require("yup");

const schema = yup.object().shape({
  regionName: yup.string().trim().min(1).max(255).required(),
});

const SpecificRegionResolver = {
  Query: {
    specificRegion: async (_, { id }) => {
      const specificRegion = await SpecificRegion.findOne({ id });
      return specificRegion.id;
    },
  },
  Mutation: {
    createSpecificRegion: async (_, { generalRegionId, regionName }) => {
      await schema.validate({ regionName });

      const doesExist = await SpecificRegion.findOne({ where: { regionName } });

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
    },
  },
};

module.exports = SpecificRegionResolver;
