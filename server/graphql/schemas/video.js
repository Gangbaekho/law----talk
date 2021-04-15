const { gql } = require("apollo-server-express");

const videoSchema = gql`
  type Video {
    id: ID!
    videoType: String!
    title: String!
    content: String!
    videoUrl: String!
    videoThumbNailUrl: String!
    reviewCount: Int!
    recommendationCount: Int!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    video(id: Int!): Int!
  }
`;

module.exports = videoSchema;
