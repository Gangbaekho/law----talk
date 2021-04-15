const Schedule = require("../../models/mysql/schedule");

const scheduleResolver = {
  Query: {
    schedule: async (_, { id }) => {
      const schedule = await Schedule.findOne({ id });
      return schedule.id;
    },
  },
};

module.exports = scheduleResolver;
