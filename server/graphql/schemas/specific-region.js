const { gql } = require("apollo-server-express");

const specificRegionSchema = gql`
  type SpecificRegion {
    id: ID!
    regionName: String!
    generalRegion: GeneralRegion!
  }

  type Query {
    specificRegion(id: Int!): Int!
  }
  type Mutation {
    createSpecificRegion(generalRegionId: Int!, regionName: String!): Int!
  }
`;

module.exports = specificRegionSchema;
