const { gql } = require("apollo-server-express");

const scheduleConfigSchema = gql`
  type ScheduleConfig {
    id: ID!
    fifteenConsultingAvailableTimeFrom: String!
    fifteenConsultingAvailableTimeTo: String!
    thirtyConsultingAvailableTimeFrom: String!
    thirtyConsultingAvailableTimeTo: String!
    lawyer: Lawyer!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    scheduleConfig(id: Int!): Int!
  }
`;

module.exports = scheduleConfigSchema;
