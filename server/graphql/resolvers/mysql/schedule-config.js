const ScheduleConfig = require("../../../models/mysql/schedule-config");

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
    scheduleConfig: async (_, { id }) => {
      const scheduleConfig = await ScheduleConfig.findOne({ where: { id } });
      return scheduleConfig;
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

      await schema.validate({
        fifteenConsultingAvailableTimeFrom,
        fifteenConsultingAvailableTimeTo,
        thirtyConsultingAvailableTimeFrom,
        thirtyConsultingAvailableTimeTo,
      });

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
  ScheduleConfig: {
    lawyer: async ({ lawyerId }, _, { models }) => {
      const lawyer = await models.Lawyer.findOne({
        where: { id: lawyerId },
      });
      return lawyer;
    },
  },
};

module.exports = scheduleConfigResolver;
