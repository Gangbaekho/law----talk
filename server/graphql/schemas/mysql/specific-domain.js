const { gql } = require("apollo-server-express");

const specificDomainSchema = gql`
  type SpecificDomain {
    id: ID!
    domainName: String!
    lawyerCount: Int!
    caseCount: Int!
    posts: [Post!]!
    videos: [Video!]!
    schedules: [Schedule!]!
    reviews: [Review!]!
    consultingQuestions: [ConsultingQuestion!]!
    generalDomain: GeneralDomain!
    lawyers: [Lawyer!]!
  }

  type Query {
    specificDomain(id: Int!): SpecificDomain!
  }
  type Mutation {
    createSpecificDomain(generalDomainId: Int!, domainName: String!): Int!
  }
`;

module.exports = specificDomainSchema;
