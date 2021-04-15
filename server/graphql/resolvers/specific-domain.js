const SpecificDomain = require("../../models/mysql/specific-domain");

const SpecificDomainResolver = {
  Query: {
    user: async (_, { id }) => {
      const specificDomain = await SpecificDomain.findOne({ id });
      return specificDomain.id;
    },
  },
};

module.exports = SpecificDomainResolver;
