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
    mongoLawyer: MongoLawyer!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  input VideoInputType {
    lawyerId: Int!
    mongoLawyerId: String!
    specificDomainId: Int!
    videoType: String!
    title: String!
    content: String!
    videoUrl: String!
    videoThumbNailUrl: String!
  }

  type Query {
    video(id: Int!): Int!
    getVideos(specificDomainId: Int!, offset: Int): [Video!]!
  }

  type Mutation {
    createVideo(videoInput: VideoInputType!): Int!
  }
`;

module.exports = videoSchema;
