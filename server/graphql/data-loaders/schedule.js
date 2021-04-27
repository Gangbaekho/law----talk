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

const batchSchedulesBySpecificDomainId = async (
  specificDomainIds,
  { Schedule }
) => {
  return await repeatableReadTransaction(async () => {
    const schedules = await Schedule.findAll({
      where: { specificDomainId: specificDomainIds },
    });
    return specificDomainIds.map((id) =>
      schedules.filter((schedule) => schedule.specificDomainId === id)
    );
  });
};

const batchSchedulesByUserId = async (userIds, { Schedule }) => {
  return await repeatableReadTransaction(async () => {
    const schedules = await Schedule.findAll({
      where: { userId: userIds },
    });
    return userIds.map((id) =>
      schedules.filter((schedule) => schedule.userId === id)
    );
  });
};

const scheduleLoader = (models) => ({
  byLawyerId: new DataLoader((lawyerIds) =>
    batchSchedulesByLawyerId(lawyerIds, models)
  ),
  bySpecificDomainId: new DataLoader((specificDomainIds) =>
    batchSchedulesBySpecificDomainId(specificDomainIds, models)
  ),
  byUserId: new DataLoader((userIds) =>
    batchSchedulesByUserId(userIds, models)
  ),
});

module.exports = scheduleLoader;
