const { mergeResolvers } = require("@graphql-tools/merge");
const userResolver = require("./resolvers/user");
const lawyerResolver = require("./resolvers/lawyer");
const generalDomainResolver = require("./resolvers/general-domain");
const generalRegionResolver = require("./resolvers/general-region");
const specificDomainResolver = require("./resolvers/specific-domain");
const specificRegionResolver = require("./resolvers/specific-region");
const scheduleConfigResolver = require("./resolvers/schedule-config");
const scheduleResolver = require("./resolvers/schedule");
const reviewResolver = require("./resolvers/review");
const reviewReplyResolver = require("./resolvers/review-reply");

const resolvers = [
  userResolver,
  lawyerResolver,
  generalDomainResolver,
  generalRegionResolver,
  specificDomainResolver,
  specificRegionResolver,
  scheduleConfigResolver,
  scheduleResolver,
  reviewResolver,
  reviewReplyResolver,
];

module.exports = mergeResolvers(resolvers);
