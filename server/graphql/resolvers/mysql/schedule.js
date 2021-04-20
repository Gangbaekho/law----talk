const Schedule = require("../../../models/mysql/schedule");

const yup = require("yup");
const { models } = require("mongoose");

const schema = yup.object().shape({
  scheduleTime: yup.string().trim().min(1).max(255).required(),
  content: yup.string().trim().min(1).required(),
});

const scheduleResolver = {
  Query: {
    schedule: async (_, { id }) => {
      const schedule = await Schedule.findOne({ where: { id } });
      return schedule;
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
  Schedule: {
    user: async ({ userId }, _, { models }) => {
      const user = await models.User.findOne({ where: { id: userId } });
      return user;
    },
    lawyer: async ({ lawyerId }, _, { models }) => {
      const lawyer = await models.Lawyer.findOne({ where: { id: lawyerId } });
      return lawyer;
    },
    specificDomain: async ({ specificDomainId }, _, { models }) => {
      const specificDomain = await models.SpecificDomain.findOne({
        where: { id: specificDomainId },
      });
      return specificDomain;
    },
  },
};

module.exports = scheduleResolver;
