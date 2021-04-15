const { gql } = require("apollo-server-express");

const consultingAnswerSchema = gql`
  type ConsultingAnswer {
    id: ID!
    title: String!
    content: String!
    viewCount: Int!
    consultingAnswers: [ConsultingAnswer!]!
    user: User!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    consultingAnswer(id: Int!): Int!
  }
`;

module.exports = consultingAnswerSchema;
