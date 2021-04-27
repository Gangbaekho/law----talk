const DataLoader = require("dataloader");

const batchMongoSchedulesByMongoScheduleIds = async (
  mongoScheduleIds,
  { MongoSchedule }
) => {
  const schedules = await MongoSchedule.find({ _id: mongoScheduleIds });

  return mongoScheduleIds.map((id) =>
    schedules.find((schedule) => schedule._id.toString() === id)
  );
};

const mongoScheduleLoader = (models) => ({
  byMongoScheduleId: new DataLoader((mongoScheduleIds) =>
    batchMongoSchedulesByMongoScheduleIds(mongoScheduleIds, models)
  ),
});

module.exports = mongoScheduleLoader;
