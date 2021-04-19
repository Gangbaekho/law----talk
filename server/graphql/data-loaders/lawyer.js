const DataLoader = require("dataloader");

const batchLawyers = async (lawyerIds, { Lawyer }) => {
  const lawyers = await Lawyer.findAll({
    where: { id: lawyerIds },
  });
  return lawyerIds.map((id) => lawyers.find((lawyer) => lawyer.id === id));
};

const lawyerLoader = (models) =>
  new DataLoader((ids) => batchLawyers(ids, models));

module.exports = lawyerLoader;
