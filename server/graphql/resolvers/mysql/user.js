const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_CODE = require("../../../util/jwt-secret-code");
const yup = require("yup");
const { Transaction } = require("sequelize");

const schema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(5).required(),
});

const userResolver = {
  Query: {
    user: async (_, { id }, { models, sequelize }) => {
      return await sequelize.transaction(async (t) => {
        user = await models.User.findOne({ where: { id } });
        return user;
      });
    },
  },
  Mutation: {
    createUser: async (_, { userInput }, { models, sequelize }) => {
      const { email, password } = userInput;

      await schema.validate({ email, password });

      return await sequelize.transaction(
        {
          isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
        },
        async (t) => {
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
        }
      );
    },
    loginUser: async (_, { userInput }, { myToken }) => {
      console.log(myToken);
      const { email, password } = userInput;

      const user = await User.findOne({ where: { email } });

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

      const token = jwt.sign(
        {
          email: user.email,
          userId: user.id,
        },
        JWT_SECRET_CODE,
        { expiresIn: "24h" }
      );

      return token;
    },
  },
  User: {
    reviews: async ({ id }, _, { models, sequelize }) => {
      return await sequelize.transaction(async (t) => {
        const reviews = await models.Review.findAll({ where: { userId: id } });
        return reviews;
      });
    },
    schedules: async ({ id }, _, { models, sequelize }) => {
      return await sequelize.transaction(async (t) => {
        const schedules = await models.Schedule.findAll({
          where: { userId: id },
        });
        return schedules;
      });
    },
    consultingQuestions: async ({ id }, _, { models, sequelize }) => {
      return await sequelize.transaction(async (t) => {
        const consultingQuestions = await models.ConsultingQuestion.findAll({
          where: { userId: id },
        });
        return consultingQuestions;
      });
    },
  },
};

module.exports = userResolver;
