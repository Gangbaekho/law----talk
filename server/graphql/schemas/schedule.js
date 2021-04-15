const { gql } = require("apollo-server-express");

const scheduleSchema = gql`
  type Schedule {
    id: ID!
    scheduleTime: String!
    consultingTime: String!
    content: String!
    user: User!
    lawyer: Lawyer!
    specificDomain: SpecificDomain!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    schedule(id: Int!): Int!
  }
`;

module.exports = scheduleSchema;
