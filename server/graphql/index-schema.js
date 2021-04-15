const { mergeTypeDefs } = require("@graphql-tools/merge");
const userType = require("./schemas/user");
const lawyerType = require("./schemas/lawyer");
const generalDomainType = require("./schemas/general-domain");
const generalRegionType = require("./schemas/general-region");
const specificDomainType = require("./schemas/specific-domain");
const specificRegionType = require("./schemas/specific-region");
const scheduleConfigType = require("./schemas/schedule-config");
const scheduleType = require("./schemas/schedule");
const replyType = require("./schemas/review");
const replyReplyType = require("./schemas/review-reply");

const types = [
  userType,
  lawyerType,
  generalDomainType,
  generalRegionType,
  specificDomainType,
  specificRegionType,
  scheduleConfigType,
  scheduleType,
  replyType,
  replyReplyType,
];

module.exports = mergeTypeDefs(types);
