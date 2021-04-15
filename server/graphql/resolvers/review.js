const Review = require("../../models/mysql/review");

const reviewResolver = {
  Query: {
    user: async (_, { id }) => {
      const review = await Review.findOne({ id });
      return review.id;
    },
  },
};

module.exports = reviewResolver;
