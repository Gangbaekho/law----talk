const Lawyer = require("../../../models/mysql/lawyer");
const MongoLawyer = require("../../../models/mongo/lawyer");
const yup = require("yup");

const schema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(5).required(),
});

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

      await schema.validate({ email, password });

      const mongoLawyer = await MongoLawyer.findOne({ _id: mongodbId });

      if (!mongoLawyer) {
        const error = new Error("invalid mongodbId");
        error.statusCode = 422;
        throw error;
      }

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
