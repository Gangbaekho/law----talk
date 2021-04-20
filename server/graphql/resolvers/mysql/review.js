const Review = require("../../../models/mysql/review");

const yup = require("yup");

const scheam = yup.object().shape({
  title: yup.string().trim().min(5).max(255).required(),
  content: yup.string().trim().min(5).max(255).required(),
  punctualTimeScore: yup.number().min(1).max(5).required(),
  kindnessScore: yup.number().min(1).max(5).required(),
  questionSolutionScore: yup.number().min(1).max(5).required(),
  likePoints: yup.string().trim().min(5).required(),
});

const REVIEWS_PER_PAGE = 10;

const reviewResolver = {
  Query: {
    review: async (_, { id }) => {
      const review = await Review.findOne({ where: { id } });
      return review.id;
    },
    getReviews: async (_, { lawyerId, offset }) => {
      const reviews = await Review.findAll({
        where: { lawyerId },
        offset,
        limit: REVIEWS_PER_PAGE,
      });
      return reviews;
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
        likePoints,
      } = reviewInput;

      await scheam.validate({
        title,
        content,
        consultingType,
        punctualTimeScore,
        kindnessScore,
        questionSolutionScore,
        likePoints,
      });

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
        likePoints,
      });

      return review.id;
    },
  },
  Review: {
    user: async ({ userId }, _, { dataLoaders }) => {
      return dataLoaders.userLoader.load(userId);
    },
  },
};

module.exports = reviewResolver;
