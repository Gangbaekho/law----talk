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

  input VideoInputType {
    lawyerId: Int!
    specificDomainId: Int!
    videoType: String!
    title: String!
    content: String!
    videoImageUrl: String!
  }

  type Mutation {
    createVideo(videoInput: VideoInputType!): Int!
  }
`;

module.exports = videoSchema;
