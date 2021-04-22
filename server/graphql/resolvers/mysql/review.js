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
    review: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const review = await models.Review.findOne({ where: { id } });
        return review;
      });
    },
    getReviews: async (_, { lawyerId, offset }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const reviews = await models.Review.findAll({
          where: { lawyerId },
          offset,
          limit: REVIEWS_PER_PAGE,
        });
        return reviews;
      });
    },
  },
  Mutation: {
    createReview: async (_, { reviewInput }, { models, transaction }) => {
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

      return await transaction.serializableTransaction(async () => {
        const review = await models.Review.create({
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
      });
    },
  },
  Review: {
    user: async ({ userId }, _, { dataLoaders }) => {
      return dataLoaders.userLoader.load(userId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.load(lawyerId);
    },
    reviewReply: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.reviewReplyLoader.load(id);
    },
    specificDomain: async ({ specificDomainId }, _, { dataLoaders }) => {
      return dataLoaders.specificDomainLoader.load(specificDomainId);
    },
  },
};

module.exports = reviewResolver;
