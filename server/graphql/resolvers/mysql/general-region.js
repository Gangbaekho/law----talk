const GeneralRegion = require("../../../models/mysql/general-region");

const generalRegionResolver = {
  Query: {
    generalRegion: async (_, { id }) => {
      const generalRegion = await GeneralRegion.findOne({ id });
      return generalRegion.id;
    },
  },
  Mutation: {
    createGeneralRegion: async (_, { regionName }) => {
      const generalRegion = await GeneralRegion.create({ regionName });
      return generalRegion.id;
    },
  },
};

module.exports = generalRegionResolver;
