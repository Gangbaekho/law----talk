const Schedule = require("../../models/mysql/schedule");

const scheduleResolver = {
  Query: {
    schedule: async (_, { id }) => {
      const schedule = await Schedule.findOne({ id });
      return schedule.id;
    },
  },
  Mutation: {
    createSchedule: async (_, { scheduleInput }) => {
      const {
        userId,
        lawyerId,
        specificDomainId,
        scheduleTime,
        consultingTime,
        content,
      } = scheduleInput;

      const schedule = await Schedule.create({
        userId,
        lawyerId,
        specificDomainId,
        scheduleTime,
        consultingTime,
        content,
      });

      return schedule.id;
    },
  },
};

module.exports = scheduleResolver;
