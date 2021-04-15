const Video = require("../../models/mysql/video");

const videoResolver = {
  Query: {
    video: async (_, { id }) => {
      const video = await Video.findOne({ id });
      return video.id;
    },
  },
  Mutation: {
    createVideo: async (_, { videoInput }) => {
      const {
        lawyerId,
        specificDomainId,
        videoType,
        title,
        content,
        videoUrl,
        videoThumbNailUrl,
      } = videoInput;

      const video = await Video.create({
        lawyerId,
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
};

module.exports = videoResolver;
