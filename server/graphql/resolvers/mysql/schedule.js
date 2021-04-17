const Schedule = require("../../../models/mysql/schedule");

const yup = require("yup");

const schema = yup.object().shape({
  scheduleTime: yup.string().trim().min(1).max(255).required(),
  content: yup.string().trim().min(1).required(),
});

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

      await schema.validate({ scheduleTime, content });

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
