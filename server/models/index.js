const User = require("./mysql/user");
const Lawyer = require("./mysql/lawyer");
const GeneralDomain = require("./mysql/general-domain");
const GeneralRegion = require("./mysql/general-region");
const SpecificDomain = require("./mysql/specific-domain");
const SpecificRegion = require("./mysql/specific-region");
const ConsultingQuestion = require("./mysql/consulting-question");
const ConsultingAnswer = require("./mysql/consulting-answer");
const Post = require("./mysql/post");
const Video = require("./mysql/video");
const ScheduleConfig = require("./mysql/schedule-config");
const Schedule = require("./mysql/schedule");
const Review = require("./mysql/review");
const ReviewReply = require("./mysql/review-reply");
const LawyerSpecificDomain = require("./mysql/lawyer-specific-domian");
const MongoLawyer = require("./mongo/lawyer");
const MongoSchedule = require("./mongo/schedule");

const models = {
  User,
  Lawyer,
  GeneralDomain,
  GeneralRegion,
  SpecificDomain,
  SpecificRegion,
  ConsultingQuestion,
  ConsultingAnswer,
  Post,
  Video,
  ScheduleConfig,
  Schedule,
  Review,
  ReviewReply,
  LawyerSpecificDomain,
  MongoLawyer,
  MongoSchedule,
};

module.exports = models;
