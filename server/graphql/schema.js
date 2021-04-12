const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    createdAt: String!
    updatedAt: String!
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
