const GeneralDomain = require("../../models/mysql/general-domain");

const generalDomainResolver = {
  Query: {
    generalDomain: async (_, { id }) => {
      const generalDomain = await GeneralDomain.findOne({ id });
      return generalDomain.id;
    },
  },
};

module.exports = generalDomainResolver;
