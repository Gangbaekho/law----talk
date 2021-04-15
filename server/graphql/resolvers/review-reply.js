const ReviewReply = require("../../models/mysql/review-reply");

const reviewReplyResolver = {
  Query: {
    user: async (_, { id }) => {
      const reviewReply = await ReviewReply.findOne({ id });
      return reviewReply.id;
    },
  },
};

module.exports = reviewReplyResolver;
