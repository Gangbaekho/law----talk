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

  input ScheduleInputType {
    userId: Int!
    lawyerId: Int!
    specificDomainId: Int!
    scheduleTime: String!
    consultingTime: String!
    content: String!
  }

  type Mutation {
    createSchedule(scheduleInput: ScheduleInputType!): Int!
  }
`;

module.exports = scheduleSchema;
