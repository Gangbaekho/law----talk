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

const batchPostsBySpecificDomainId = async (specificDomainIds, { Post }) => {
  return await repeatableReadTransaction(async () => {
    const posts = await Post.findAll({
      where: { specificDomainId: specificDomainIds },
    });
    return specificDomainIds.map((id) =>
      posts.filter((post) => post.specificDomainId === id)
    );
  });
};

const postLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchPostsByLawyerId(lawyerIds, models)
  ),
  bySpecificDomainId: new DataLoader((specificDomainIds) =>
    batchPostsBySpecificDomainId(specificDomainIds, models)
  ),
});

module.exports = postLoader;
