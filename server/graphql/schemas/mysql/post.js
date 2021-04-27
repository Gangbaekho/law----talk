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
    mongoLawyer: MongoLawyer!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  input PostInputType {
    lawyerId: Int!
    mongoLawyerId: String!
    specificDomainId: Int!
    postType: String!
    title: String!
    content: String!
    postImageUrl: String!
  }

  type CurrentPagePostsResponse {
    posts: [Post!]!
    currentPage: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    nextPage: Int!
    previousPage: Int!
    lastPage: Int!
  }

  type Query {
    post(id: Int!): Post!
    getPosts(specificDomainId: Int!, offset: Int): [Post!]!
    getCurrentPagePosts(
      specificDomainId: Int!
      page: Int
    ): CurrentPagePostsResponse!
  }

  type Mutation {
    createPost(postInput: PostInputType!): Int!
  }
`;

module.exports = postSchema;
