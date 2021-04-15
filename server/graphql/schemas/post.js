const { gql } = require("apollo-server-express");

const postSchema = gql`
  type Post {
    id: ID!
    postType: String!
    title: String!
    content: String!
    postImageUrl: String!
    reviewCount: Int!
    recommendationCount: Int!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    post(id: Int!): Int!
  }
`;

module.exports = postSchema;
