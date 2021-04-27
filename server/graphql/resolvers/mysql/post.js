const ITEMS_PER_PAGE = 9;

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
        return post;
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
    getCurrentPagePosts: async (
      _,
      { specificDomainId, page = 1 },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const totalItems = await models.Post.count({
          where: { specificDomainId },
        });
        const posts = await models.Post.findAll({
          where: { specificDomainId },
          offset: (page - 1) * ITEMS_PER_PAGE,
          limit: ITEMS_PER_PAGE,
        });
        return {
          posts: posts,
          currentPage: page,
          hasNextPage: ITEMS_PER_PAGE * page < totalItems,
          hasPreviousPage: page > 1,
          nextPage: page + 1,
          previousPage: page - 1,
          lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
        };
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
        const post = await models.Post.create({
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
      return dataLoaders.mongoLawyerLoader.byMongoLawyerId.load(mongoLawyerId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.byLawyerId.load(lawyerId);
    },
    specificDomain: async ({ specificDomainId }, _, { dataLoaders }) => {
      return dataLoaders.specificDomainLoader.bySpecificDomainId.load(
        specificDomainId
      );
    },
  },
};

module.exports = postResolver;
