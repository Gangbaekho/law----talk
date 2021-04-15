const { gql } = require("apollo-server-express");

const generalDomainSchema = gql`
  type GeneralDomain {
    id: ID!
    domainName: String!
    specificDomains: [SpecificDomain!]!
  }

  type Query {
    generalDomain(id: Int!): Int!
  }
`;

module.exports = generalDomainSchema;
