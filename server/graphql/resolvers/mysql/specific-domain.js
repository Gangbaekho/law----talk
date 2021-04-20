const SpecificDomain = require("../../../models/mysql/specific-domain");
const yup = require("yup");

const schema = yup.object().shape({
  domainName: yup.string().trim().min(1).max(255).required(),
});

const SpecificDomainResolver = {
  Query: {
    specificDomain: async (_, { id }) => {
      const specificDomain = await SpecificDomain.findOne({ where: { id } });
      return specificDomain;
    },
  },
  Mutation: {
    createSpecificDomain: async (_, { generalDomainId, domainName }) => {
      await schema.validate({ domainName });

      const doesExist = await SpecificDomain.findOne({ where: { domainName } });

      if (doesExist) {
        const error = new Error("specific domain already exist");
        error.statusCode = 422;
        throw error;
      }

      const specificDomain = await SpecificDomain.create({
        generalDomainId,
        domainName,
      });

      return specificDomain.id;
    },
  },
  SpecificDomain: {
    posts: async ({ id }, _, { models }) => {
      const posts = await models.Post.findAll({
        where: { specificDomainId: id },
        limit: 10,
      });
      return posts;
    },
    videos: async ({ id }, _, { models }) => {
      const videos = await models.Video.findAll({
        where: { specificDomainId: id },
        limit: 10,
      });
      return videos;
    },
    schedules: async ({ id }, _, { models }) => {
      const schedules = await models.Schedule.findAll({
        where: { specificDomainId: id },
        limit: 10,
      });
      return schedules;
    },
    reviews: async ({ id }, _, { models }) => {
      const reviews = await models.Review.findAll({
        where: { specificDomainId: id },
        limit: 10,
      });
      return reviews;
    },
    consultingQuestions: async ({ id }, _, { models }) => {
      const consultingQuestions = await models.ConsultingQuestion.findAll({
        where: { specificDomainId: id },
        limit: 10,
      });
      return consultingQuestions;
    },
    generalDomain: async ({ generalDomainId }, _, { models }) => {
      const generalDomain = await models.GeneralDomain.findOne({
        where: { id: generalDomainId },
      });
      return generalDomain;
    },
  },
};

module.exports = SpecificDomainResolver;
