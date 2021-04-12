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
  }
`;

module.exports = typeDefs;
