const Post = require("../../../models/mysql/post");
const MongoLawyer = require("../../../models/mongo/lawyer");

const POSTS_PER_PAGE = 10;

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
    getPosts: async (_, { specificDomainId, offset }) => {
      const posts = await Post.findAll({
        where: { specificDomainId },
        offset,
        limit: POSTS_PER_PAGE,
      });

      return posts;
    },
  },
  Mutation: {
    createPost: async (_, { postInput }) => {
      const {
        lawyerId,
        mongoLawyerId,
        specificDomainId,
        postType,
        title,
        content,
        postImageUrl,
      } = postInput;

      await schema.validate({ postType, title, content, postImageUrl });

      const post = await Post.create({
        lawyerId,
        mongoLawyerId,
        specificDomainId,
        postType,
        title,
        content,
        postImageUrl,
      });

      return post.id;
    },
  },
  Post: {
    mongoLawyer: async ({ mongoLawyerId }, _, { dataLoaders }) => {
      // const lawyer = await MongoLawyer.findOne({ _id: mongoLawyerId });
      // return lawyer;
      return dataLoaders.mongoLawyerLoader.load(mongoLawyerId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.load(lawyerId);
    },
  },
};

module.exports = postResolver;
