const ReviewReply = require("../../../models/mysql/review-reply");

const yup = require("yup");

const schema = yup.object().shape({
  content: yup.string().trim().min(5).required(),
});

const reviewReplyResolver = {
  Query: {
    reviewReply: async (_, { id }) => {
      const reviewReply = await ReviewReply.findOne({ where: { id } });
      return reviewReply;
    },
  },
  Mutation: {
    createReviewReply: async (_, { reviewReplyInput }) => {
      const { lawyerId, reviewId, content } = reviewReplyInput;

      await schema.validate({ content });

      const reviewReply = await ReviewReply.create({
        lawyerId,
        reviewId,
        content,
      });

      return reviewReply.id;
    },
  },
  ReviewReply: {
    review: async ({ reviewId }, _, { dataLoaders }) => {
      return dataLoaders.reviewLoader.load(reviewId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.load(lawyerId);
    },
  },
};

module.exports = reviewReplyResolver;
