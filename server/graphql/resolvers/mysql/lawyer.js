const yup = require("yup");
const Lawyer = require("../../../models/mysql/lawyer");
const { Op } = require("sequelize");
const moment = require("moment");

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

        // 아래있는것도 같은 결과가 나오긴 하나, 쿼리가 이상하게 너무 복잡하다.
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
    getLawyersByRecentAnswerCount: async (_, __, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const orderedLawyers = await models.ConsultingAnswer.findAll({
          attributes: ["lawyerId"],
          where: {
            createdAt: {
              [Op.and]: {
                [Op.lte]: moment().format("YYYY-MM-DD"),
                [Op.gte]: moment().subtract(7, "days").format("YYYY-MM-DD"),
              },
            },
          },
          group: "lawyerId",
          order: [sequelize.fn("count", sequelize.col("*"))],
        });
        const orderedLawyerIds = orderedLawyers.map(
          (lawyer) => lawyer.lawyerId
        );

        const lawyers = await models.Lawyer.findAll({
          where: { id: orderedLawyerIds.reverse() },
        });

        return lawyers;
      });
    },
  },
  Mutation: {
    createLawyer: async (_, { lawyerInput }, { models, transaction }) => {
      const { mongodbId, email, password, isPremium, priorityScore } =
        lawyerInput;

      await schema.validate({ email, password });

      return await transaction.serializableTransaction(async () => {
        // const mongoLawyer = await models.MongoLawyer.findOne({
        //   _id: mongodbId,
        // });

        // if (!mongoLawyer) {
        //   const error = new Error("invalid mongodbId");
        //   error.statusCode = 422;
        //   throw error;
        // }

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
    scheduleConfig: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.scheduleConfigLoader.byLawyerId.load(id);
    },
    posts: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.postLoader.byLawyerId.load(id);
    },
    videos: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.videoLoader.byLawyerId.load(id);
    },
    schedules: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.scheduleLoader.byLawyerId.load(id);
    },
    reviews: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.reviewLoader.byLawyerId.load(id);
    },
    reviewReplies: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.reviewReplyLoader.byLawyerId.load(id);
    },
    consultingAnswers: async ({ id }, _, { dataLoaders }) => {
      return dataLoaders.consultingAnswerLoader.byLawyerId.load(id);
    },
    mongoLawyer: async ({ mongodbId }, _, { dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.byMongoLawyerId.load(mongodbId);
    },
  },
};

module.exports = lawyerResolver;
