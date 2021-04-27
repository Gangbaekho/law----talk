const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchVideosByLawyerId = async (lawyerIds, { Video }) => {
  return await repeatableReadTransaction(async () => {
    const videos = await Video.findAll({
      where: { lawyerId: lawyerIds },
    });
    return lawyerIds.map((id) =>
      videos.filter((video) => video.lawyerId === id)
    );
  });
};

const videoLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchVideosByLawyerId(lawyerIds, models)
  ),
});

module.exports = videoLoader;
