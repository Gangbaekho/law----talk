const Schedule = require("../../../models/mongo/schedule");

const mongoScheduleResolver = {
  Query: {
    mongoSchedule: async (_, { _id }, { dataLoaders }) => {
      return dataLoaders.mongoScheduleLoader.byMongoScheduleId.load(_id);
    },
  },
  Mutation: {
    createMongoSchedule: async (_, { mongoScheduleInput }) => {
      const {
        lawyerId,
        mysqlLawyerId,
        fifteenConsultingAvailableTime,
        thirtyConsultingAvailableTime,
        scheduleDate,
      } = mongoScheduleInput;

      console.log(mongoScheduleInput);

      const schedule = new Schedule({
        lawyerId,
        mysqlLawyerId,
        fifteenConsultingAvailableTime,
        thirtyConsultingAvailableTime,
        scheduleDate,
      });

      const createdSchedule = await schedule.save();
      return createdSchedule._id;
    },
  },
};

module.exports = mongoScheduleResolver;
