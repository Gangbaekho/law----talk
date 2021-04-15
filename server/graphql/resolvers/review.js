const Review = require("../../models/mysql/review");

const reviewResolver = {
  Query: {
    review: async (_, { id }) => {
      const review = await Review.findOne({ id });
      return review.id;
    },
  },
  Mutation: {
    createReview: async (_, { reviewInput }) => {
      const {
        userId,
        lawyerId,
        specificDomainId,
        title,
        content,
        consultingType,
        punctualTimeScore,
        kindnessScore,
        questionSolutionScore,
        estimateKeyword,
      } = reviewInput;

      const averageScore =
        (punctualTimeScore + kindnessScore + questionSolutionScore) / 3;

      const review = await Review.create({
        userId,
        lawyerId,
        specificDomainId,
        title,
        content,
        consultingType,
        punctualTimeScore,
        kindnessScore,
        questionSolutionScore,
        averageScore,
        estimateKeyword,
      });

      return review.id;
    },
  },
};

module.exports = reviewResolver;
