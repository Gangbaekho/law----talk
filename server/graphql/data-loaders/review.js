const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchReviewsByReviewId = async (reviewIds, { Review }) => {
  return await repeatableReadTransaction(async () => {
    const reviews = await Review.findAll({
      where: { id: reviewIds },
    });
    return reviewIds.map((id) => reviews.find((review) => review.id === id));
  });
};

const batchReviewsByLawyerId = async (lawyerIds, { Review }) => {
  return await repeatableReadTransaction(async () => {
    const reviews = await Review.findAll({
      where: { lawyerId: lawyerIds },
    });
    return lawyerIds.map((id) =>
      reviews.filter((review) => review.laweyrId === id)
    );
  });
};

const reviewLoader = (models) => ({
  byReviewId: new DataLoader((reviewIds) =>
    batchReviewsByReviewId(reviewIds, models)
  ),
  byLawyerId: new DataLoader((lawyerIds) =>
    batchReviewsByLawyerId(lawyerIds, models)
  ),
});

module.exports = reviewLoader;
