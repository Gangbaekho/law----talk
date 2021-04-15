const Post = require("../../models/mysql/post");

const postResolver = {
  Query: {
    post: async (_, { id }) => {
      const post = await Post.findOne({ id });
      return post.id;
    },
  },
};

module.exports = postResolver;
