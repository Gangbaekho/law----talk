const DataLoader = require("dataloader");

const batchReviews = async (reviewIds, { Review }) => {
  const reviews = await Review.findAll({
    where: { id: reviewIds },
  });
  return reviewIds.map((id) => reviews.find((review) => review.id === id));
};

const reviewLoader = (models) =>
  new DataLoader((ids) => batchReviews(ids, models));

module.exports = reviewLoader;
