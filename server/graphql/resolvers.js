const User = require("../models/mysql/user");
const GeneralDomain = require("../models/mysql/general-domain");
const GeneralRegion = require("../models/mysql/general-region");

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
  },
};

module.exports = resolvers;
