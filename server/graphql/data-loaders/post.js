const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchPostsByLawyerId = async (lawyerIds, { Post }) => {
  return await repeatableReadTransaction(async () => {
    const posts = await Post.findAll({
      where: { lawyerId: lawyerIds },
    });
    return lawyerIds.map((id) => posts.filter((post) => post.lawyerId === id));
  });
};

const postLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchPostsByLawyerId(lawyerIds, models)
  ),
});

module.exports = postLoader;
