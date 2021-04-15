const ReviewReply = require("../../models/mysql/review-reply");

const reviewReplyResolver = {
  Query: {
    reviewReply: async (_, { id }) => {
      const reviewReply = await ReviewReply.findOne({ id });
      return reviewReply.id;
    },
  },
  Mutation: {
    createReviewReply: async (_, { reviewReplyInput }) => {
      const { lawyerId, reviewId, content } = reviewReplyInput;

      const reviewReply = await ReviewReply.create({
        lawyerId,
        reviewId,
        content,
      });

      return reviewReply.id;
    },
  },
};

module.exports = reviewReplyResolver;
