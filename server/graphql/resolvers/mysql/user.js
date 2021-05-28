const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_CODE = require("../../../util/jwt-secret-code");
const yup = require("yup");

const schema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(5).required(),
});

const userResolver = {
  Query: {
    user: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        user = await models.User.findOne({ where: { id } });
        return user;
      });
    },
  },
  Mutation: {
    createUser: async (_, { userInput }, { models, transaction }) => {
      const { email, password } = userInput;

      await schema.validate({ email, password });

      return await transaction.serializableTransaction(async () => {
        const isExist = await models.User.findOne({ where: { email } });

        if (isExist) {
          const error = new Error("email exists already");
          error.statusCode = 422;
          throw error;
        }

        const encodedPassword = await bcrypt.hash(password, 12);

        const user = await models.User.create({
          email,
          password: encodedPassword,
        });

        return user.id;
      });
    },
    loginUser: async (_, { userInput }, { models, transaction, session }) => {
      const { email, password } = userInput;

      await schema.validate({ email, password });

      return await transaction.repeatableReadTransaction(async () => {
        const user = await models.User.findOne({ where: { email } });

        if (!user) {
          const error = new Error("user does not exists.");
          error.statusCode = 422;
          throw error;
        }

        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
          const error = new Error("password is invalid.");
          error.statusCode = 422;
          throw error;
        }

        session.userId = user.id;

        return user.id;
      });
    },
  },
  User: {
    reviews: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.reviewLoader.byUserId.load(id);
    },
    schedules: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.scheduleLoader.byUserId.load(id);
    },
    consultingQuestions: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.consultingQuestionLoader.byUserId.load(id);
    },
  },
};

module.exports = userResolver;
