const { mergeTypeDefs } = require("@graphql-tools/merge");
const userType = require("./schemas/user");
const lawyerType = require("./schemas/lawyer");
const generalDomainType = require("./schemas/general-domain");
const generalRegionType = require("./schemas/general-region");
const specificDomainType = require("./schemas/specific-domain");
const specificRegionType = require("./schemas/specific-region");

const types = [
  userType,
  lawyerType,
  generalDomainType,
  generalRegionType,
  specificDomainType,
  specificRegionType,
];

module.exports = mergeTypeDefs(types);
