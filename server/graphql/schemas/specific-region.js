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
`;

module.exports = specificRegionSchema;
