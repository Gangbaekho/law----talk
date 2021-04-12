const User = require("../models/mysql/user");
const GeneralDomain = require("../models/mysql/general-domain");
const GeneralRegion = require("../models/mysql/general-region");
const SpecificDomain = require("../models/mysql/specific-domain");
const SpecificRegion = require("../models/mysql/specific-region");

const resolvers = {
  Query: {
    user: async (_, { userId }) => {
      const user = await User.findOne({ id: userId });
      const { id, email, createdAt, updatedAt } = user;
      return {
        id,
        email,
        createdAt,
        updatedAt,
      };
    },
  },
  Mutation: {
    createGeneralDomain: async (_, { domainName }) => {
      const generalDomain = await GeneralDomain.create({ domainName });
      return generalDomain.id;
    },
    createGeneralRegion: async (_, { regionName }) => {
      const generalRegion = await GeneralRegion.create({ regionName });
      return generalRegion.id;
    },
    createSpecificDomain: async (_, { generalDomainId, domainName }) => {
      const specificDomain = await SpecificDomain.create({
        generalDomainId,
        domainName,
      });
      return specificDomain.id;
    },
    createSpecificRegion: async (_, { generalRegionId, regionName }) => {
      const specificRegion = await SpecificRegion.create({
        generalRegionId,
        regionName,
      });
      return specificRegion.id;
    },
  },
};

module.exports = resolvers;
