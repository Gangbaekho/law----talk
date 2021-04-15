const { gql } = require("apollo-server-express");

const reviewReplySchema = gql`
  type reviewReplySchema {
    id: ID!
    content: String!
    review: Review!
    lawyer: Lawyer!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    reviewReply(id: Int!): Int!
  }
`;

module.exports = reviewReplySchema;
