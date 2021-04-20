const DataLoader = require("dataloader");

const batchReviewReplies = async (reviewIds, { ReviewReply }) => {
  const reviewReplies = await ReviewReply.findAll({
    where: { reviewId: reviewIds },
  });
  return reviewIds.map((id) =>
    reviewReplies.find((reviewReply) => reviewReply.reviewId === id)
  );
};

const reviewReplyLoader = (models) =>
  new DataLoader((ids) => batchReviewReplies(ids, models));

module.exports = reviewReplyLoader;
