const Review = require("../../../models/mysql/review");

const yup = require("yup");

const scheam = yup.object().shape({
  title: yup.string().trim().min(5).max(255).required(),
  content: yup.string().trim().min(5).max(255).required(),
  consultingType: yup.string().trim().min(5).max(255).required(),
  punctualTimeScore: yup.number().min(1).max(5).required(),
  kindnessScore: yup.number().min(1).max(5).required(),
  questionSolutionScore: yup.number().min(1).max(5).required(),
});

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

      await scheam.validate({
        title,
        content,
        consultingType,
        punctualTimeScore,
        kindnessScore,
        questionSolutionScore,
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
      });

      return review.id;
    },
  },
};

module.exports = reviewResolver;
