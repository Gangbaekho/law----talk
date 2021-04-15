const Lawyer = require("../../models/mysql/lawyer");

const lawyerResolver = {
  Query: {
    lawyer: async (_, { id }) => {
      const lawyer = await Lawyer.findOne({ id });
      return lawyer.id;
    },
  },
};

module.exports = lawyerResolver;
