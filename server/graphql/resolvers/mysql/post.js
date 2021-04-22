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
    post: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const post = await models.Post.findOne({ id });
        return post.id;
      });
    },
    getPosts: async (
      _,
      { specificDomainId, offset },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const posts = await models.Post.findAll({
          where: { specificDomainId },
          offset,
          limit: POSTS_PER_PAGE,
        });

        return posts;
      });
    },
  },
  Mutation: {
    createPost: async (_, { postInput }, { models, transaction }) => {
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

      return await transaction.serializableTransaction(async () => {
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
      });
    },
  },
  Post: {
    mongoLawyer: async ({ mongoLawyerId }, _, { dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.load(mongoLawyerId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.load(lawyerId);
    },
    specificDomain: async ({ specificDomainId }, _, { dataLoaders }) => {
      return dataLoaders.specificDomainLoader.load(specificDomainId);
    },
  },
};

module.exports = postResolver;
