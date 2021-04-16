const User = require("../../../models/mysql/user");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_CODE = require("../../../util/jwt-secret-code");

const userResolver = {
  Query: {
    user: async (_, { id }) => {
      const user = await User.findOne({ id });
      return user.id;
    },
  },
  Mutation: {
    createUser: async (_, { userInput }) => {
      const { email, password } = userInput;

      const isExist = await User.findOne({ email });

      if (isExist) {
        const error = new Error("email exists already");
        error.statusCode = 422;
        throw error;
      }

      const encodedPassword = await bcrypt.hash(password, 12);

      const user = await User.create({
        email,
        password: encodedPassword,
      });

      return user.id;
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
};

module.exports = userResolver;
