const { gql } = require("apollo-server-express");

const consultingQuestionSchema = gql`
  type ConsultingQuestion {
    id: ID!
    content: String!
    recommendationCount: Int!
    consultingQuestion: ConsultingQuestion!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    consultingQuestion(id: Int!): Int!
  }

  input ConsultingAnswerInputType {
    lawyerId: Int!
    consultingQuestionId: Int!
    content: String!
  }

  type Mutation {
    createConsultingAnswer(
      consultingAnswerInput: ConsultingAnswerInputType!
    ): Int!
  }
`;

module.exports = consultingQuestionSchema;
