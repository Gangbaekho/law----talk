const Post = require("../../../models/mysql/post");

const yup = require("yup");
const schema = yup.object().shape({
  postType: yup.string().min(1).required(),
  title: yup.string().trim().min(5).max(255).required(),
  content: yup.string().trim().min(5).required(),
  postImageUrl: yup.string().url().required(),
});

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

      await schema.validate({ postType, title, content, postImageUrl });

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
