const Lawyer = require("../../../models/mysql/lawyer");

const lawyerResolver = {
  Query: {
    lawyer: async (_, { id }) => {
      const lawyer = await Lawyer.findOne({ id });
      return lawyer.id;
    },
  },
  Mutation: {
    createLawyer: async (_, { lawyerInput }) => {
      const {
        mongodbId,
        email,
        password,
        isPremium,
        priorityScore,
      } = lawyerInput;

      const lawyer = await Lawyer.create({
        mongodbId,
        email,
        password,
        isPremium,
        priorityScore,
      });

      return lawyer.id;
    },
  },
};

module.exports = lawyerResolver;
