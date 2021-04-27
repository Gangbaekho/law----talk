const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchGeneralRegionsByGeneralRegionId = async (
  generalRegionIds,
  { GeneralRegion }
) => {
  return await repeatableReadTransaction(async () => {
    const generalRegions = await GeneralRegion.findAll({
      where: { id: generalRegionIds },
    });
    return generalRegionIds.map((id) =>
      generalRegions.find((generalRegion) => generalRegion.id === id)
    );
  });
};

const generalRegionLoader = (models) => ({
  byGeneralRegionId: new DataLoader((generalRegionIds) =>
    batchGeneralRegionsByGeneralRegionId(generalRegionIds, models)
  ),
});

module.exports = generalRegionLoader;
