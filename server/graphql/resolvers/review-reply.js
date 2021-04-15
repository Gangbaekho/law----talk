const ReviewReply = require("../../models/mysql/review-reply");

const reviewReplyResolver = {
  Query: {
    reviewReply: async (_, { id }) => {
      const reviewReply = await ReviewReply.findOne({ id });
      return reviewReply.id;
    },
  },
};

module.exports = reviewReplyResolver;
