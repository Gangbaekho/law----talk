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

  type CurrentPageConsultingAnswersResponse {
    consultingQuestions: [ConsultingQuestion!]!
    currentPage: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    nextPage: Int!
    previousPage: Int!
    lastPage: Int!
  }

  type Query {
    consultingQuestion(id: Int!): ConsultingQuestion!
    getConsultingQuestions(
      specificDomainId: Int!
      offset: Int
    ): [ConsultingQuestion!]!
    getCurrentPageConsultingQuestions(
      specificDomainId: Int!
      page: Int
    ): CurrentPageConsultingAnswersResponse
  }

  type Mutation {
    createConsultingQuestion(
      consultingQuestionInput: ConsultingQuestionInputType!
    ): Int!
  }
`;

module.exports = consultingQuestionSchema;
