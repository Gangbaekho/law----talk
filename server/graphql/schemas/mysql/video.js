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

  type CurrentPageVideosResponse {
    videos: [Video!]!
    currentPage: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    nextPage: Int!
    previousPage: Int!
    lastPage: Int!
  }

  type Query {
    video(id: Int!): Video!
    getVideos(specificDomainId: Int!, offset: Int): [Video!]!
    getCurrentPageVideos(
      specificDomainId: Int!
      page: Int
    ): CurrentPageVideosResponse!
  }

  type Mutation {
    createVideo(videoInput: VideoInputType!): Int!
  }
`;

module.exports = videoSchema;
