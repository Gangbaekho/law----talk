const { gql } = require("apollo-server-express");

const userSchema = gql`
  type User {
    id: ID!
    email: String!
    # reviews: [Review!]!
    # schedules: [Schedule!]!
    # consultingQuestions: [ConsultingQuestion!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    user(id: Int!): Int!
  }
`;

module.exports = userSchema;
