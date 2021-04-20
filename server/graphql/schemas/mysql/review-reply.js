const { gql } = require("apollo-server-express");

const reviewReplySchema = gql`
  type ReviewReply {
    id: ID!
    content: String!
    review: Review!
    lawyer: Lawyer!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    reviewReply(id: Int!): ReviewReply!
  }

  input ReviewReplyInputType {
    lawyerId: Int!
    reviewId: Int!
    content: String!
  }

  type Mutation {
    createReviewReply(reviewReplyInput: ReviewReplyInputType!): Int!
  }
`;

module.exports = reviewReplySchema;
