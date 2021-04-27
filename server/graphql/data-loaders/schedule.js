const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchSchedulesByLawyerId = async (lawyerIds, { Schedule }) => {
  return await repeatableReadTransaction(async () => {
    const schedules = await Schedule.findAll({
      where: { lawyerId: lawyerIds },
    });
    return lawyerIds.map((id) =>
      schedules.filter((schedule) => schedule.lawyerId === id)
    );
  });
};

const scheduleLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchSchedulesByLawyerId(lawyerIds, models)
  ),
});

module.exports = scheduleLoader;
