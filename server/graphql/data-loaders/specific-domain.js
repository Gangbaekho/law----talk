const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchSpecificDomainsBySpecificDomainId = async (
  specificDomainIds,
  { SpecificDomain }
) => {
  return await repeatableReadTransaction(async () => {
    const specificDomains = await SpecificDomain.findAll({
      where: { id: specificDomainIds },
    });
    return specificDomainIds.map((id) =>
      specificDomains.find((specificDomain) => specificDomain.id === id)
    );
  });
};

const specificDomainLoader = (models) => ({
  bySpecificDomainId: new DataLoader((ids) =>
    batchSpecificDomains(ids, models)
  ),
});

module.exports = specificDomainLoader;
