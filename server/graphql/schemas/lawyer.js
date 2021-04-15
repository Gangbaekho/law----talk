const { gql } = require("apollo-server-express");

const lawyerSchema = gql`
  type Lawyer {
    id: ID!
    mongodbId: ID!
    email: String!
    isPremium: String!
    priorityScore: Int!
    # scheduleConfig: ScheduleConfig!
    # posts: [Post!]!
    # video: [Video]!
    # schedules: [Schedule!]!
    # reviews: [Review]!
    # reviewReplies: [ReviewReply!]!
    # consultingAnswers: [ConsultingAnswer!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    lawyer(id: Int!): Int!
  }
`;

module.exports = lawyerSchema;
