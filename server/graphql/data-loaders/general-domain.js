const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchGeneralDomainsByGeneralDomainId = async (
  generalDomainIds,
  { GeneralDomain }
) => {
  return await repeatableReadTransaction(async () => {
    const generalDomains = await GeneralDomain.findAll({
      where: { id: generalDomainIds },
    });
    return generalDomainIds.map((id) =>
      generalDomains.find((generalDomain) => generalDomain.id === id)
    );
  });
};

const generalDomainLoader = (models) => ({
  byGeneralDomainId: new DataLoader((generalDomainIds) =>
    batchGeneralDomainsByGeneralDomainId(generalDomainIds, models)
  ),
});

module.exports = generalDomainLoader;
