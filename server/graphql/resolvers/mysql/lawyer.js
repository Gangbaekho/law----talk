const yup = require("yup");
const Lawyer = require("../../../models/mysql/lawyer");

const { QueryTypes } = require("sequelize");
const sequelize = require("../../../util/mysql");

const schema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(5).required(),
});

const lawyerSortFunction = (a, b) => {
  if (
    (a.isPremium === "Y" && b.isPremium === "N") ||
    (a.isPremium === "Y" &&
      b.isPremium === "Y" &&
      a.priorityScore > b.priorityScore) ||
    (a.isPremium === "N" &&
      b.isPremium === "N" &&
      a.priorityScore > b.priorityScore)
  ) {
    return -1;
  } else if (
    (a.isPremium === "N" && b.isPremium === "Y") ||
    (a.isPremium === "Y" &&
      b.isPremium === "Y" &&
      a.priorityScore < b.priorityScore) ||
    (a.isPremium === "N" &&
      b.isPremium === "N" &&
      a.priorityScore < b.priorityScore)
  ) {
    return 1;
  } else {
    return 0;
  }
};

const lawyerResolver = {
  Query: {
    lawyer: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const lawyer = await models.Lawyer.findOne({ id });
        return lawyer;
      });
    },
    getLawyers: async (_, { specificDomainId }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const specificDomainWithLawyers = await models.SpecificDomain.findOne({
          where: { id: specificDomainId },
          include: { model: Lawyer, required: true },
        });
        const lawyers = specificDomainWithLawyers.lawyers;
        lawyers.sort(lawyerSortFunction);
        return lawyers;
      });
    },
    getMoreLawyers: async (
      _,
      { specificDomainId, offset },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const lawyers = await sequelize.query(
          "SELECT L.id, L.mongodbId,L.email, L.isPremium, L.priorityScore, L.createdAt, L.updatedAt FROM `lawyer-specific-domains` LSD JOIN lawyers L ON LSD.lawyerId = L.id WHERE LSD.specificDomainId = ? AND L.isPremium = 'N' LIMIT ?,10",
          {
            replacements: [specificDomainId, offset],
            type: QueryTypes.SELECT,
          }
        );

        return lawyers;

        // const lawyerSpecificDomains = await models.LawyerSpecificDomain.findAll({where:{specificDomainId}});
        // const lawyerIds = lawyerSpecificDomains.map(lawyerSpecificDomain=> lawyerSpecificDomain.lawyerId);

        // const lawyers =

        // const specificDomainWithLawyers = await models.SpecificDomain.findOne({
        //   where: { id: specificDomainId },
        //   include: { model: Lawyer, where: { isPremium: "N" }, required: true },
        //   offset: offset,
        //   limit: 10,
        // });
        // const lawyers = specificDomainWithLawyers.lawyers;
        // return lawyers;
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
        const mongoLawyer = await models.MongoLawyer.findOne({
          _id: mongodbId,
        });

        if (!mongoLawyer) {
          const error = new Error("invalid mongodbId");
          error.statusCode = 422;
          throw error;
        }

        const lawyer = await models.Lawyer.create({
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
    mongoLawyer: async ({ mongodbId }, _, { models, dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.load(mongodbId);
    },
  },
};

module.exports = lawyerResolver;
