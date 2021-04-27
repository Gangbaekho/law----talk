const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchLawyersByLawyerId = async (lawyerIds, { Lawyer }) => {
  return await repeatableReadTransaction(async () => {
    const lawyers = await Lawyer.findAll({
      where: { id: lawyerIds },
    });
    return lawyerIds.map((id) => lawyers.find((lawyer) => lawyer.id === id));
  });
};

const lawyerLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchLawyersByLawyerId(lawyerIds, models)
  ),
});

module.exports = lawyerLoader;
