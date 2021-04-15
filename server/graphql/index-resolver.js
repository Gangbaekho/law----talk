const { mergeResolvers } = require("@graphql-tools/merge");
const userResolver = require("./resolvers/user");
const lawyerResolver = require("./resolvers/lawyer");
const generalDomainResolver = require("./resolvers/general-domain");
const generalRegionResolver = require("./resolvers/general-region");
const specificDomainResolver = require("./resolvers/specific-domain");
const specificRegionResolver = require("./resolvers/specific-region");

const resolvers = [
  userResolver,
  lawyerResolver,
  generalDomainResolver,
  generalRegionResolver,
  specificDomainResolver,
  specificRegionResolver,
];

module.exports = mergeResolvers(resolvers);
