const yup = require("yup");
const schema = yup.object().shape({
  videoType: yup.string().min(1).required(),
  title: yup.string().trim().min(5).max(255).required(),
  content: yup.string().trim().min(5).required(),
  videoUrl: yup.string().url().required(),
  videoThumbNailUrl: yup.string().url().required(),
});

const ITEMS_PER_PAGE = 10;

const videoResolver = {
  Query: {
    video: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const video = await models.Video.findOne({ id });
        return video;
      });
    },
    getVideos: async (
      _,
      { specificDomainId, offset },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const videos = await models.Video.findAll({
          where: { specificDomainId },
          offset,
          limit: VIDEOS_PER_PAGE,
        });
        return videos;
      });
    },
    getCurrentPageVideos: async (
      _,
      { specificDomainId, page = 1 },
      { models, transaction }
    ) => {
      return await transaction.repeatableReadTransaction(async () => {
        const totalItems = await models.Video.count({
          where: { specificDomainId },
        });
        const videos = await models.Video.findAll({
          where: { specificDomainId },
          offset: (page - 1) * ITEMS_PER_PAGE,
          limit: ITEMS_PER_PAGE,
        });
        return {
          videos: videos,
          currentPage: page,
          hasNextPage: ITEMS_PER_PAGE * page < totalItems,
          hasPreviousPage: page > 1,
          nextPage: page + 1,
          previousPage: page - 1,
          lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
        };
      });
    },
  },
  Mutation: {
    createVideo: async (_, { videoInput }, { models, transaction }) => {
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

      return await transaction.serializableTransaction(async () => {
        const video = await models.Video.create({
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
      });
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
