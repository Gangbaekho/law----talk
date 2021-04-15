const SpecificRegion = require("../../models/mysql/specific-region");

const SpecificRegionResolver = {
  Query: {
    user: async (_, { id }) => {
      const specificRegion = await SpecificRegion.findOne({ id });
      return specificRegion.id;
    },
  },
};

module.exports = SpecificRegionResolver;
