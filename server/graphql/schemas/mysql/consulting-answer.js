const { gql } = require("apollo-server-express");

const consultingAnswerSchema = gql`
  type ConsultingAnswer {
    id: ID!
    content: String!
    recommendationCount: Int!
    consultingQuestion: ConsultingQuestion!
    createdAt: String!
    updatedAt: String!
  }

  input ConsultingAnswerInputType {
    lawyerId: Int!
    consultingQuestionId: Int!
    content: String!
  }

  type Query {
    consultingAnswer(id: Int!): Int!
  }

  type Mutation {
    createConsultingAnswer(
      consultingAnswerInput: ConsultingAnswerInputType!
    ): Int!
  }
`;

module.exports = consultingAnswerSchema;
