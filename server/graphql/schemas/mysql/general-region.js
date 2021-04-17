const { gql } = require("apollo-server-express");

const generalRegionSchema = gql`
  type GeneralRegion {
    id: ID!
    regionName: String!
    specificRegions: [SpecificRegion!]!
  }

  type Query {
    generalRegion(id: Int!): Int!
  }

  type Mutation {
    createGeneralRegion(regionName: String!): Int!
  }
`;

module.exports = generalRegionSchema;