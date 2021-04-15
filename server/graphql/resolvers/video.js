const Video = require("../../models/mysql/video");

const videoResolver = {
  Query: {
    video: async (_, { id }) => {
      const video = await Video.findOne({ id });
      return video.id;
    },
  },
};

module.exports = videoResolver;
