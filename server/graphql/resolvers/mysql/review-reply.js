const yup = require("yup");

const schema = yup.object().shape({
  content: yup.string().trim().min(5).required(),
});

const reviewReplyResolver = {
  Query: {
    reviewReply: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const reviewReply = await models.ReviewReply.findOne({ where: { id } });
        return reviewReply;
      });
    },
  },
  Mutation: {
    createReviewReply: async (
      _,
      { reviewReplyInput },
      { models, transaction }
    ) => {
      const { lawyerId, mongoLawyerId, reviewId, content } = reviewReplyInput;

      await schema.validate({ content });

      return await transaction.serializableTransaction(async () => {
        const reviewReply = await models.ReviewReply.create({
          lawyerId,
          mongoLawyerId,
          reviewId,
          content,
        });

        return reviewReply.id;
      });
    },
  },
  ReviewReply: {
    review: async ({ reviewId }, _, { dataLoaders }) => {
      return dataLoaders.reviewLoader.byReviewId.load(reviewId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.byLawyerId.load(lawyerId);
    },
    mongoLawyer: async ({ mongoLawyerId }, _, { dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.byMongoLawyerId.load(mongoLawyerId);
    },
  },
};

module.exports = reviewReplyResolver;
