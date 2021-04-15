const Post = require("../../models/mysql/post");

const postResolver = {
  Query: {
    post: async (_, { id }) => {
      const post = await Post.findOne({ id });
      return post.id;
    },
  },
  Mutation: {
    createPost: async (_, { postInput }) => {
      const {
        lawyerId,
        specificDomainId,
        postType,
        title,
        content,
        postImageUrl,
      } = postInput;

      const post = await Post.create({
        lawyerId,
        specificDomainId,
        postType,
        title,
        content,
        postImageUrl,
      });

      return post.id;
    },
  },
};

module.exports = postResolver;
