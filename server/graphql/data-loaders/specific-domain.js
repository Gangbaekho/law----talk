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

const batchSpecificDomainsByGeneralDomainId = async (
  generalDomainIds,
  { SpecificDomain }
) => {
  return await repeatableReadTransaction(async () => {
    const specificDomains = await SpecificDomain.findAll({
      where: { generalDomainId: generalDomainIds },
    });
    return generalDomainIds.map((id) =>
      specificDomains.filter(
        (specificDomain) => specificDomain.generalDomainId === id
      )
    );
  });
};

const specificDomainLoader = (models) => ({
  bySpecificDomainId: new DataLoader((specificDomainIds) =>
    batchSpecificDomainsBySpecificDomainId(specificDomainIds, models)
  ),
  byGeneralDomainId: new DataLoader((generalDomainIds) =>
    batchSpecificDomainsByGeneralDomainId(generalDomainIds, models)
  ),
});

module.exports = specificDomainLoader;
