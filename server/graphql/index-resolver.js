const { mergeResolvers } = require("@graphql-tools/merge");
const userResolver = require("./resolvers/user");
const lawyerResolver = require("./resolvers/lawyer");

const resolvers = [userResolver, lawyerResolver];

module.exports = mergeResolvers(resolvers);
