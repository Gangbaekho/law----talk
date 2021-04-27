const yup = require("yup");

const timeRegexValidation = yup
  .string()
  .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  .required();

const schema = yup.object().shape({
  fifteenConsultingAvailableTimeFrom: timeRegexValidation,
  fifteenConsultingAvailableTimeTo: timeRegexValidation,
  thirtyConsultingAvailableTimeFrom: timeRegexValidation,
  thirtyConsultingAvailableTimeTo: timeRegexValidation,
});

const scheduleConfigResolver = {
  Query: {
    scheduleConfig: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const scheduleConfig = await models.ScheduleConfig.findOne({
          where: { id },
        });
        return scheduleConfig;
      });
    },
  },
  Mutation: {
    createScheduleConfig: async (
      _,
      { scheduleConfigInput },
      { models, transaction }
    ) => {
      const {
        lawyerId,
        fifteenConsultingAvailableTimeFrom,
        fifteenConsultingAvailableTimeTo,
        thirtyConsultingAvailableTimeFrom,
        thirtyConsultingAvailableTimeTo,
      } = scheduleConfigInput;

      await schema.validate({
        fifteenConsultingAvailableTimeFrom,
        fifteenConsultingAvailableTimeTo,
        thirtyConsultingAvailableTimeFrom,
        thirtyConsultingAvailableTimeTo,
      });

      return await transaction.serializableTransaction(async () => {
        const scheduleConfig = await models.ScheduleConfig.create({
          lawyerId,
          fifteenConsultingAvailableTimeFrom,
          fifteenConsultingAvailableTimeTo,
          thirtyConsultingAvailableTimeFrom,
          thirtyConsultingAvailableTimeTo,
        });

        return scheduleConfig.id;
      });
    },
  },
  ScheduleConfig: {
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.byLawyerId.load(lawyerId);
    },
  },
};

module.exports = scheduleConfigResolver;
