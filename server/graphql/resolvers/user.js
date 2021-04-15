const User = require("../../models/mysql/user");

const userResolver = {
  Query: {
    user: async (_, { id }) => {
      const user = await User.findOne({ id });
      return user.id;
    },
  },
};

module.exports = userResolver;
