const User = require("../models/mysql/user");

const resolvers = {
  Query: {
    user: async (_, { userId }) => {
      const user = await User.findOne({ id: userId });
      const { id, email, createdAt, updatedAt } = user;
      return {
        id,
        email,
        createdAt,
        updatedAt,
      };
    },
  },
};

module.exports = resolvers;
