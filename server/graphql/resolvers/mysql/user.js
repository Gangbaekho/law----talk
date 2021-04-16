const User = require("../../../models/mysql/user");

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

      const user = await User.create({
        email,
        password,
      });

      return user.id;
    },
  },
};

module.exports = userResolver;
