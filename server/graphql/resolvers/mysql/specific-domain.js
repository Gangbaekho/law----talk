const SpecificDomain = require("../../../models/mysql/specific-domain");

const SpecificDomainResolver = {
  Query: {
    specificDomain: async (_, { id }) => {
      const specificDomain = await SpecificDomain.findOne({ id });
      return specificDomain.id;
    },
  },
  Mutation: {
    createSpecificDomain: async (_, { generalDomainId, domainName }) => {
      const specificDomain = await SpecificDomain.create({
        generalDomainId,
        domainName,
      });

      return specificDomain.id;
    },
  },
};

module.exports = SpecificDomainResolver;
