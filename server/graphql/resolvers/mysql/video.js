const Video = require("../../../models/mysql/video");

const yup = require("yup");
const schema = yup.object().shape({
  videoType: yup.string().min(1).required(),
  title: yup.string().min(5).max(255).required(),
  content: yup.string().min(5).required(),
  videoUrl: yup.string().url().required(),
  videoThumbNailUrl: yup.string().url().required(),
});

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

      await schema.validate({
        videoType,
        title,
        content,
        videoUrl,
        videoThumbNailUrl,
      });

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
