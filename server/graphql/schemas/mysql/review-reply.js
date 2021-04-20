const { gql } = require("apollo-server-express");

const reviewReplySchema = gql`
  type ReviewReply {
    id: ID!
    mongoLawyerId: ID!
    content: String!
    review: Review!
    lawyer: Lawyer!
    mongoLawyer: MongoLawyer!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    reviewReply(id: Int!): ReviewReply!
  }

  input ReviewReplyInputType {
    lawyerId: Int!
    mongoLawyerId: String!
    reviewId: Int!
    content: String!
  }

  type Mutation {
    createReviewReply(reviewReplyInput: ReviewReplyInputType!): Int!
  }
`;

module.exports = reviewReplySchema;
