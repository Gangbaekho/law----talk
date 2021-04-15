const ScheduleConfig = require("../../models/mysql/schedule-config");

const scheduleConfigResolver = {
  Query: {
    scheduleConfig: async (_, { id }) => {
      const scheduleConfig = await ScheduleConfig.findOne({ id });
      return scheduleConfig.id;
    },
  },
};

module.exports = scheduleConfigResolver;
