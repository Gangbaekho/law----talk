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
    likePoints: String!
    reviewReply: ReviewReply!
    user: User!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    review(id: Int!): Int!
    getReviews(lawyerId: Int!, offset: Int): [Review!]!
  }

  input ReviewInputType {
    userId: Int!
    lawyerId: Int!
    specificDomainId: Int!
    title: String!
    content: String!
    consultingType: String!
    punctualTimeScore: Int!
    kindnessScore: Int!
    questionSolutionScore: Int!
    estimateKeyword: String!
    likePoints: String!
  }

  type Mutation {
    createReview(reviewInput: ReviewInputType!): Int!
  }
`;

module.exports = reviewSchema;
