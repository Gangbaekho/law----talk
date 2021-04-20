const { gql } = require("apollo-server-express");

const lawyerSchema = gql`
  type Lawyer {
    id: ID!
    mongodbId: ID!
    email: String!
    isPremium: String!
    priorityScore: Int!
    mongoLawyer: MongoLawyer!
    scheduleConfig: ScheduleConfig!
    posts: [Post!]!
    videos: [Video]!
    schedules: [Schedule!]!
    reviews: [Review]!
    reviewReplies: [ReviewReply!]!
    consultingAnswers: [ConsultingAnswer!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    lawyer(id: Int!): Lawyer!
  }

  input LawyerInputType {
    mongodbId: String!
    email: String!
    password: String!
    isPremium: String!
    priorityScore: Int!
  }

  type Mutation {
    createLawyer(lawyerInput: LawyerInputType!): Int!
  }
`;

module.exports = lawyerSchema;
