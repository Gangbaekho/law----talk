const { gql } = require("apollo-server-express");

const consultingQuestionSchema = gql`
  type ConsultingQuestion {
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

  input ConsultingQuestionInputType {
    userId: Int!
    specificDomainId: Int!
    title: String!
    content: String!
  }

  type Query {
    consultingQuestion(id: Int!): ConsultingQuestion!
    getConsultingQuestions(
      specificDomainId: Int!
      offset: Int
    ): [ConsultingQuestion!]!
  }

  type Mutation {
    createConsultingQuestion(
      consultingQuestionInput: ConsultingQuestionInputType!
    ): Int!
  }
`;

module.exports = consultingQuestionSchema;
