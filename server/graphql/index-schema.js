const { mergeTypeDefs } = require("@graphql-tools/merge");
const userType = require("./schemas/user");
const lawyerType = require("./schemas/lawyer");

const types = [userType, lawyerType];

module.exports = mergeTypeDefs(types);
