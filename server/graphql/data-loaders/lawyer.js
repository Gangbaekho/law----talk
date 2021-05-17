const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");
const sequelize = require("../../util/mysql");
const { QueryTypes } = require("sequelize");

const batchLawyersByLawyerId = async (lawyerIds, { Lawyer }) => {
  return await repeatableReadTransaction(async () => {
    const lawyers = await Lawyer.findAll({
      where: { id: lawyerIds },
    });
    return lawyerIds.map((id) => lawyers.find((lawyer) => lawyer.id === id));
  });
};

const batchLawyersBySpecificDomainId = async (specificDomainIds) => {
  return await repeatableReadTransaction(async () => {
    const lawyers = await sequelize.query(
      "SELECT L.*, LSD.specificDomainId FROM `lawyer-specific-domains` LSD JOIN lawyers L ON LSD.lawyerId = L.id WHERE LSD.specificDomainId IN (?) ORDER BY L.isPremium DESC, L.priorityScore DESC LIMIT 20",
      {
        replacements: [specificDomainIds],
        type: QueryTypes.SELECT,
      }
    );

    return specificDomainIds.map((id) =>
      lawyers.filter((lawyer) => lawyer.specificDomainId === id)
    );
  });
};

const lawyerLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchLawyersByLawyerId(lawyerIds, models)
  ),
  bySpecificDomainId: new DataLoader((specificDomainIds) =>
    batchLawyersBySpecificDomainId(specificDomainIds)
  ),
});

module.exports = lawyerLoader;
