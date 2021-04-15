const { gql } = require("apollo-server-express");

const reviewSchema = gql`
  type Review {
    id: ID!
    title: String!
    content: String!
    consultingType: String!
    punctualTimeScore: Int!
    kindnessScore: Int!
    questionSolutionScore: Int!
    averageScore: Float!
    estimateKeyword: String!
    reviewReplies: [ReviewReply!]!
    user: User!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    review(id: Int!): Int!
  }
`;

module.exports = reviewSchema;
