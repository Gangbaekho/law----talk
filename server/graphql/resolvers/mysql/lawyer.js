const yup = require("yup");

const schema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(5).required(),
});

const lawyerResolver = {
  Query: {
    lawyer: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const lawyer = await models.Lawyer.findOne({ id });
        return lawyer;
      });
    },
  },
  Mutation: {
    createLawyer: async (_, { lawyerInput }, { models, transaction }) => {
      const {
        mongodbId,
        email,
        password,
        isPremium,
        priorityScore,
      } = lawyerInput;

      await schema.validate({ email, password });

      return await transaction.serializableTransaction(async () => {
        const mongoLawyer = await MongoLawyer.findOne({ _id: mongodbId });

        if (!mongoLawyer) {
          const error = new Error("invalid mongodbId");
          error.statusCode = 422;
          throw error;
        }

        const lawyer = await Lawyer.create({
          mongodbId,
          email,
          password,
          isPremium,
          priorityScore,
        });

        return lawyer.id;
      });
    },
  },
  Lawyer: {
    scheduleConfig: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const scheduleConfig = await models.ScheduleConfig.findOne({
          where: { lawyerId: id },
        });
        return scheduleConfig;
      });
    },
    posts: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const posts = await models.Post.findAll({ where: { lawyerId: id } });
        return posts;
      });
    },
    videos: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const videos = await models.Video.findAll({ where: { lawyerId: id } });
        return videos;
      });
    },
    schedules: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const schedules = await models.Schedule.findAll({
          where: { lawyerId: id },
        });
        return schedules;
      });
    },
    reviews: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const reviews = await models.Review.findAll({
          where: { lawyerId: id },
        });
        return reviews;
      });
    },
    reviewReplies: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const reviewReplies = await models.ReviewReply.findAll({
          where: { lawyerId: id },
        });
        return reviewReplies;
      });
    },
    consultingAnswers: async ({ id }, _, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const consultingAnswers = await models.ConsultingAnswer.findAll({
          where: { lawyerId: id },
        });
        return consultingAnswers;
      });
    },
    mongoLawyer: async ({ mongodbId }, _, { models }) => {
      const mongoLawyer = await models.MongoLawyer.findOne({ _id: mongodbId });
      return mongoLawyer;
    },
  },
};

module.exports = lawyerResolver;
