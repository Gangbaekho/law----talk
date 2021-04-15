const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
    reviews: [Review!]!
    schedules: [Schedule!]!
    consultingQuestions: [ConsultingQuestion!]!
  }

  type Lawyer {
    id: ID!
    mongodbId: ID!
    email: String!
    isPremium: String!
    priorityScore: Int!
    createdAt: String!
    updatedAt: String!
    scheduleConfig: ScheduleConfig!
    posts: [Post!]!
    video: [Video]!
    schedules: [Schedule!]!
    reviews: [Review]!
    reviewReplies: [ReviewReply!]!
    consultingAnswers: [ConsultingAnswer!]!
  }

  type GeneralDomain {
    id: ID!
    domainName: String!
    specificDomains: [SpecificDomain!]!
  }

  type GeneralRegion {
    id: ID!
    regionName: String!
    specificRegions: [SpecificRegion!]!
  }

  type SpecificDomain {
    id: ID!
    domainName: String!
    lawyerCount: Int!
    caseCount: Int!
    posts: [Post!]!
    videos: [Video!]!
    schedules: [Schedule!]!
    reviews: [Review!]!
    consultingQuestions: [ConsultingQuestion!]!
    generalDomain: GeneralDomain!
  }

  type SpecificRegion {
    id: ID!
    regionName: String!
    generalRegion: GeneralRegion!
  }

  type ScheduleConfig {
    id: ID!
    fifteenConsultingAvailableTimeFrom: String!
    fifteenConsultingAvailableTimeTo: String!
    thirtyConsultingAvailableTimeFrom: String!
    thirtyConsultingAvailableTimeTo: String!
    createdAt: String!
    updatedAt: String!
  }

  type Schedule {
    id: ID!
    scheduleTime: String!
    consultingTime: String!
    content: String!
    createdAt: String!
    updatedAt: String!
    user: User!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
  }

  type Review {
    id: ID!
    title: String!
    content: String!
    consultingType: String!
    punctualTimeScore: Int!
    kindnessScore: Int!
    questionSolutionScore: Int!
    averageScore: Float!
    estimateKeyword: String!
    createdAt: String!
    updatedAt: String!
    reviewReplies: [ReviewReply!]!
    user: User!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
  }

  type ReviewReply {
    id: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
    review: Review!
    lawyer: Lawyer!
  }

  type ConsultingQuestion {
    id: ID!
    title: String!
    content: String!
    viewCount: Int!
    createdAt: String!
    updatedAt: String!
    consultingAnswers: [consultingAnswer!]!
    user: User!
    specificDomain: SpecificDomain!
  }

  type ConsultingAnswer {
    id: ID!
    content: String!
    recommendationCount: Int!
    createdAt: String!
    updatedAt: String!
    consultingQuestion: ConsultingQuestion!
  }

  type Post {
    id: ID!
    postType: String!
    title: String!
    content: String!
    postImageUrl: String!
    reviewCount: Int!
    recommendationCount: Int!
    createdAt: String!
    updatedAt: String!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
  }

  type Video {
    id: ID!
    videoType: String!
    title: String!
    content: String!
    videoUrl: String!
    videoThumbNailUrl: String!
    reviewCount: Int!
    recommendationCount: Int!
    createdAt: String!
    updatedAt: String!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
  }

  type Query {
    user(id: Int!): User!
  }

  type Mutation {
    createGeneralDomain(domainName: String!): Int!
    createGeneralRegion(regionName: String!): Int!
    createSpecificDomain(generalDomainId: Int!, domainName: String!): Int!
    createSpecificRegion(generalRegionId: Int!, regionName: String!): Int!
    createConsultingQuestion(
      userId: Int!
      specificDomainId: Int!
      title: String!
      content: String!
    ): Int!
    createConsultingAnswer(
      lawyerId: Int!
      consultingQuestionId: Int!
      content: String!
    ): Int!
    createPost(
      lawyerId: Int!
      specificDomainId: Int!
      postType: String!
      title: String!
      content: String!
      postImageUrl: String!
    ): Int!
    createVideo(
      lawyerId: Int!
      specificDomainId: Int!
      videoType: String!
      title: String!
      content: String!
      videoImageUrl: String!
    ): Int!
    createReview(
      userId: Int!
      lawyerId: Int!
      specificDomainId: Int!
      title: String!
      content: String!
      consultingType: String!
      punctualTimeScore: Int!
      kindnessScore: Int!
      questionSolutionScore: Int!
      estimateKeyword: String!
    ): Int!
    createReviewReply(lawyerId: Int!, reviewId: Int!, content: String!): Int!
    createScheduleConfig(
      lawyerId: Int!
      fifteenConsultingAvailableTimeFrom: String!
      fifteenConsultingAvailableTimeTo: String!
      thirtyConsultingAvailableTimeFrom: String!
      thirtyConsultingAvailableTimeTo: String!
    ): Int!
    createSchedule(
      userId: Int!
      lawyerId: Int!
      specificDomainId: Int!
      scheduleTime: String!
      consultingTime: String!
      content: String!
    ): Int!
  }
`;

module.exports = typeDefs;
