const { gql } = require("apollo-server-express");

const userSchema = gql`
  type User {
    id: ID!
    email: String!
    reviews: [Review!]!
    schedules: [Schedule!]!
    consultingQuestions: [ConsultingQuestion!]!
    createdAt: String!
    updatedAt: String!
  }

  input UserInputType {
    email: String!
    password: String!
  }

  type Query {
    user(id: Int!): Int!
  }

  type Mutation {
    createUser(userInput: UserInputType!): Int!
    loginUser(userInput: UserInputType!): String!
  }
`;

module.exports = userSchema;
