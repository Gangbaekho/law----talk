const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchScheduleConfigsByLawyerId = async (
  lawyerIds,
  { ScheduleConfig }
) => {
  return await repeatableReadTransaction(async () => {
    const scheduleConfigs = await ScheduleConfig.findAll({
      where: { lawyerId: lawyerIds },
    });
    return lawyerIds.map((id) =>
      scheduleConfigs.find((scheduleConfig) => scheduleConfig.lawyerId === id)
    );
  });
};

const scheduleConfigLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchScheduleConfigsByLawyerId(lawyerIds, models)
  ),
});

module.exports = scheduleConfigLoader;
