const ScheduleConfig = require("../../../models/mysql/schedule-config");

const scheduleConfigResolver = {
  Query: {
    scheduleConfig: async (_, { id }) => {
      const scheduleConfig = await ScheduleConfig.findOne({ id });
      return scheduleConfig.id;
    },
  },
  Mutation: {
    createScheduleConfig: async (_, { scheduleConfigInput }) => {
      const {
        lawyerId,
        fifteenConsultingAvailableTimeFrom,
        fifteenConsultingAvailableTimeTo,
        thirtyConsultingAvailableTimeFrom,
        thirtyConsultingAvailableTimeTo,
      } = scheduleConfigInput;

      const scheduleConfig = await ScheduleConfig.create({
        lawyerId,
        fifteenConsultingAvailableTimeFrom,
        fifteenConsultingAvailableTimeTo,
        thirtyConsultingAvailableTimeFrom,
        thirtyConsultingAvailableTimeTo,
      });

      return scheduleConfig.id;
    },
  },
};

module.exports = scheduleConfigResolver;
