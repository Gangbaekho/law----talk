const User = require("../models/mysql/user");
const GeneralDomain = require("../models/mysql/general-domain");
const GeneralRegion = require("../models/mysql/general-region");
const SpecificDomain = require("../models/mysql/specific-domain");
const SpecificRegion = require("../models/mysql/specific-region");
const ConsultingQuestion = require("../models/mysql/consulting-question");
const ConsultingAnswer = require("../models/mysql/consulting-answer");
const Post = require("../models/mysql/post");
const Video = require("../models/mysql/video");
const Review = require("../models/mysql/review");
const ReviewReply = require("../models/mysql/review-reply");
const ScheduleConfig = require("../models/mysql/schedule-config");
const Schedule = require("../models/mysql/schedule");

const resolvers = {
  Query: {
    user: async (_, { userId }) => {
      const user = await User.findOne({ id: userId });
      const { id, email, createdAt, updatedAt } = user;
      return {
        id,
        email,
        createdAt,
        updatedAt,
      };
    },
  },
  Mutation: {
    createGeneralDomain: async (_, { domainName }) => {
      const generalDomain = await GeneralDomain.create({ domainName });
      return generalDomain.id;
    },
    createGeneralRegion: async (_, { regionName }) => {
      const generalRegion = await GeneralRegion.create({ regionName });
      return generalRegion.id;
    },
    createSpecificDomain: async (_, { generalDomainId, domainName }) => {
      const specificDomain = await SpecificDomain.create({
        generalDomainId,
        domainName,
      });
      return specificDomain.id;
    },
    createSpecificRegion: async (_, { generalRegionId, regionName }) => {
      const specificRegion = await SpecificRegion.create({
        generalRegionId,
        regionName,
      });
      return specificRegion.id;
    },
    createConsultingQuestion: async (
      _,
      { userId, specificDomainId, title, content }
    ) => {
      const consultingQuestion = await ConsultingQuestion.create({
        userId,
        specificDomainId,
        title,
        content,
      });
      return consultingQuestion.id;
    },
    createConsultingAnswer: async (
      _,
      { lawyerId, consultingQuestionId, content }
    ) => {
      const consultingAnwer = await ConsultingAnswer.create({
        lawyerId,
        consultingQuestionId,
        content,
      });
      return consultingAnwer.id;
    },
    createPost: async (
      _,
      { lawyerId, specificDomainId, postType, title, content, postImageUrl }
    ) => {
      const post = await Post.create({
        lawyerId,
        specificDomainId,
        postType,
        title,
        content,
        postImageUrl,
      });
      return post.id;
    },
    createVideo: async (
      _,
      { lawyerId, specificDomainId, videoType, title, content, videoImageUrl }
    ) => {
      const video = await Video.create({
        lawyerId,
        specificDomainId,
        videoType,
        title,
        content,
        videoImageUrl,
      });
      return video.id;
    },
    createReview: async (
      _,
      {
        userId,
        lawyerId,
        specificDomainId,
        title,
        content,
        consultingType,
        punctualTimeScore,
        kindnessScore,
        questionSolutionScore,
        estimateKeyword,
      }
    ) => {
      const averageScore =
        (punctualTimeScore + kindnessScore + questionSolutionScore) / 3;
      const review = await Review.create({
        userId,
        lawyerId,
        specificDomainId,
        title,
        content,
        consultingType,
        punctualTimeScore,
        kindnessScore,
        questionSolutionScore,
        averageScore,
        estimateKeyword,
      });
      return review.id;
    },
    createReviewReply: async (_, { lawyerId, reviewId, content }) => {
      const reviewReply = await ReviewReply.create({
        lawyerId,
        reviewId,
        content,
      });
      return reviewReply.id;
    },
    createScheduleConfig: async (
      _,
      {
        lawyerId,
        fifteenConsultingAvailableTimeFrom,
        fifteenConsultingAvailableTimeTo,
        thirtyConsultingAvailableTimeFrom,
        thirtyConsultingAvailableTimeTo,
      }
    ) => {
      const scheduleConfig = await ScheduleConfig.create({
        lawyerId,
        fifteenConsultingAvailableTimeFrom,
        fifteenConsultingAvailableTimeTo,
        thirtyConsultingAvailableTimeFrom,
        thirtyConsultingAvailableTimeTo,
      });
      return scheduleConfig.id;
    },
    createSchedule: async (
      _,
      {
        userId,
        lawyerId,
        specificDomainId,
        scheduleTime,
        consultingTime,
        content,
      }
    ) => {
      const schedule = await Schedule.create({
        userId,
        lawyerId,
        specificDomainId,
        scheduleTime,
        consultingTime,
        content,
      });
      return schedule.id;
    },
  },
};

module.exports = resolvers;
