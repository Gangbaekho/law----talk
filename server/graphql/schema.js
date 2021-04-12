const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    user(id: Int!): User!
  }

  type Mutation {
    createGeneralDomain(domainName: String!): Int!
    createGeneralRegion(regionName: String!): Int!
    createSpecificDomain(generalDomainId: Int!, domainName: String!): Int!
    createSpecificRegion(generalRegionId: Int!, regionName: String!): Int!
    createConsultingQuestion(
      userId: Int!
      specificDomainId: Int!
      title: String!
      content: String!
    ): Int!
    createConsultingAnswer(
      lawyerId: Int!
      consultingQuestionId: Int!
      content: String!
    ): Int!
    createPost(
      lawyerId: Int!
      specificDomainId: Int!
      postType: String!
      title: String!
      content: String!
      postImageUrl: String!
    ): Int!
    createVideo(
      lawyerId: Int!
      specificDomainId: Int!
      videoType: String!
      title: String!
      content: String!
      videoImageUrl: String!
    ): Int!
  }
`;

module.exports = typeDefs;
