const Video = require("../../../models/mysql/video");

const yup = require("yup");
const schema = yup.object().shape({
  videoType: yup.string().min(1).required(),
  title: yup.string().trim().min(5).max(255).required(),
  content: yup.string().trim().min(5).required(),
  videoUrl: yup.string().url().required(),
  videoThumbNailUrl: yup.string().url().required(),
});

const VIDEOS_PER_PAGE = 10;

const videoResolver = {
  Query: {
    video: async (_, { id }) => {
      const video = await Video.findOne({ id });
      return video.id;
    },
    getVideos: async (_, { specificDomainId, offset }) => {
      const videos = await Video.findAll({
        where: { specificDomainId },
        offset,
        limit: VIDEOS_PER_PAGE,
      });
      return videos;
    },
  },
  Mutation: {
    createVideo: async (_, { videoInput }) => {
      const {
        lawyerId,
        mongoLawyerId,
        specificDomainId,
        videoType,
        title,
        content,
        videoUrl,
        videoThumbNailUrl,
      } = videoInput;

      await schema.validate({
        videoType,
        title,
        content,
        videoUrl,
        videoThumbNailUrl,
      });

      const video = await Video.create({
        lawyerId,
        mongoLawyerId,
        specificDomainId,
        videoType,
        title,
        content,
        videoUrl,
        videoThumbNailUrl,
      });

      return video.id;
    },
  },
  Video: {
    lawyer: async ({ lawyerId }, _, { dataLoaders }) => {
      return dataLoaders.lawyerLoader.load(lawyerId);
    },
    mongoLawyer: async ({ mongoLawyerId }, _, { dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.load(mongoLawyerId);
    },
    specificDomain: async ({ specificDomainId }, _, { dataLoaders }) => {
      return dataLoaders.specificDomainLoader.load(specificDomainId);
    },
  },
};

module.exports = videoResolver;
