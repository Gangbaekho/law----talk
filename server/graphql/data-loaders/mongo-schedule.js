const DataLoader = require("dataloader");
const moment = require("moment");

const batchMongoSchedulesByMongoScheduleIds = async (
  mongoScheduleIds,
  { MongoSchedule }
) => {
  const schedules = await MongoSchedule.find({
    _id: mongoScheduleIds,
  });

  return mongoScheduleIds.map((id) =>
    schedules.find((schedule) => schedule._id.toString() === id)
  );
};

const batchMongoSchedulesByMongoLawyerId = async (
  mongoLawyerIds,
  { MongoSchedule }
) => {
  const schedules = await MongoSchedule.find({
    lawyerId: mongoLawyerIds,
    scheduleDate: moment().format("YYYY-MM-DD"),
  });

  return mongoLawyerIds.map((id) =>
    schedules.find((schedule) => schedule.lawyerId.toString() === id.toString())
  );
};

const mongoScheduleLoader = (models) => ({
  byMongoScheduleId: new DataLoader((mongoScheduleIds) =>
    batchMongoSchedulesByMongoScheduleIds(mongoScheduleIds, models)
  ),
  byMongoLawyerId: new DataLoader((mongoLawyerIds) =>
    batchMongoSchedulesByMongoLawyerId(mongoLawyerIds, models)
  ),
});

module.exports = mongoScheduleLoader;
