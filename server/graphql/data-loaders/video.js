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

const batchVideosBySpecificDomainId = async (specificDomainIds, { Video }) => {
  return await repeatableReadTransaction(async () => {
    const videos = await Video.findAll({
      where: { specificDomainId: specificDomainIds },
    });
    return specificDomainIds.map((id) =>
      videos.filter((video) => video.specificDomainId === id)
    );
  });
};

const videoLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchVideosByLawyerId(lawyerIds, models)
  ),
  bySpecificDomainId: new DataLoader((specificDomainIds) =>
    batchVideosBySpecificDomainId(specificDomainIds, models)
  ),
});

module.exports = videoLoader;
