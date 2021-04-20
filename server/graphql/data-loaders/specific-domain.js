const DataLoader = require("dataloader");

const batchSpecificDomains = async (specificDomainIds, { SpecificDomain }) => {
  const specificDomains = await SpecificDomain.findAll({
    where: { id: specificDomainIds },
  });
  return specificDomainIds.map((id) =>
    specificDomains.find((specificDomain) => specificDomain.id === id)
  );
};

const specificDomainLoader = (models) =>
  new DataLoader((ids) => batchSpecificDomains(ids, models));

module.exports = specificDomainLoader;
