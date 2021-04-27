const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchReviewRepliesByReviewId = async (reviewIds, { ReviewReply }) => {
  return await repeatableReadTransaction(async () => {
    const reviewReplies = await ReviewReply.findAll({
      where: { reviewId: reviewIds },
    });
    return reviewIds.map((id) =>
      reviewReplies.find((reviewReply) => reviewReply.reviewId === id)
    );
  });
};

const batchReviewRepliesByLawyerId = async (lawyerIds, { ReviewReply }) => {
  return await repeatableReadTransaction(async () => {
    const reviewReplies = await ReviewReply.findAll({
      where: { lawyerId: lawyerIds },
    });
    return lawyerIds.map((id) =>
      reviewReplies.filter((reviewReply) => reviewReply.lawyerId === id)
    );
  });
};

const reviewReplyLoader = (models) => ({
  byReviewId: new DataLoader((reviewIds) =>
    batchReviewRepliesByReviewId(reviewIds, models)
  ),
  byLawyerId: new DataLoader((lawyerIds) =>
    batchReviewRepliesByLawyerId(lawyerIds, models)
  ),
});

module.exports = reviewReplyLoader;
