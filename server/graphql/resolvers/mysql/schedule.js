const yup = require("yup");

const schema = yup.object().shape({
  scheduleTime: yup.string().trim().min(1).max(255).required(),
  content: yup.string().trim().min(1).required(),
});

const scheduleResolver = {
  Query: {
    schedule: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const schedule = await models.Schedule.findOne({ where: { id } });
        return schedule;
      });
    },
  },
  Mutation: {
    createSchedule: async (_, { scheduleInput }, { models, transaction }) => {
      const {
        userId,
        lawyerId,
        specificDomainId,
        scheduleTime,
        consultingTime,
        content,
      } = scheduleInput;

      await schema.validate({ scheduleTime, content });

      return await transaction.serializableTransaction(async () => {
        const schedule = await models.Schedule.create({
          userId,
          lawyerId,
          specificDomainId,
          scheduleTime,
          consultingTime,
          content,
        });

        return schedule.id;
      });
    },
  },
  Schedule: {
    user: async ({ userId }, _, { dataLoaders }) => {
      return dataLoaders.userLoader.byUserId.load(userId);
    },
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.byLawyerId.load(lawyerId);
    },
    specificDomain: async ({ specificDomainId }, _, { dataLoaders }) => {
      return dataLoaders.specificDomainLoader.bySpecificDomainId.load(
        specificDomainId
      );
    },
  },
};

module.exports = scheduleResolver;
