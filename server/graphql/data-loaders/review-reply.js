const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchReviewReplies = async (reviewIds, { ReviewReply }) => {
  return await repeatableReadTransaction(async () => {
    const reviewReplies = await ReviewReply.findAll({
      where: { reviewId: reviewIds },
    });
    return reviewIds.map((id) =>
      reviewReplies.find((reviewReply) => reviewReply.reviewId === id)
    );
  });
};

const reviewReplyLoader = (models) =>
  new DataLoader((ids) => batchReviewReplies(ids, models));

module.exports = reviewReplyLoader;
