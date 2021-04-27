const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchSpecificRegionsBySpecificRegionId = async (
  specificRegionIds,
  { SpecificRegion }
) => {
  return await repeatableReadTransaction(async () => {
    const specificRegions = await SpecificRegion.findAll({
      where: { id: specificRegionIds },
    });
    return specificRegionIds.map((id) =>
      specificRegions.find((specificRegion) => specificRegion.id === id)
    );
  });
};

const batchSpecificRegionsByGeneralRegionId = async (
  generalRegionIds,
  { SpecificRegion }
) => {
  return await repeatableReadTransaction(async () => {
    const specificRegions = await SpecificRegion.findAll({
      where: { generalRegionId: generalRegionIds },
    });
    return generalRegionIds.map((id) =>
      specificRegions.filter(
        (specificRegion) => specificRegion.generalDomainId === id
      )
    );
  });
};

const specificRegionLoader = (models) => ({
  bySpecificRegionId: new DataLoader((specificRegionIds) =>
    batchSpecificRegionsBySpecificRegionId(specificRegionIds, models)
  ),
  byGeneralRegionId: new DataLoader((generalRegionIds) =>
    batchSpecificRegionsByGeneralRegionId(generalRegionIds, models)
  ),
});

module.exports = specificRegionLoader;
