const ReviewReply = require("../../../models/mysql/review-reply");

const yup = require("yup");

const schema = yup.object().shape({
  content: yup.string().trim().min(5).required(),
});

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

      await schema.validate({ content });

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
