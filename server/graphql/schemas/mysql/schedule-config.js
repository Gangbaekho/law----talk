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
    scheduleConfig(id: Int!): ScheduleConfig!
  }

  input ScheduleConfigInputType {
    lawyerId: Int!
    fifteenConsultingAvailableTimeFrom: String!
    fifteenConsultingAvailableTimeTo: String!
    thirtyConsultingAvailableTimeFrom: String!
    thirtyConsultingAvailableTimeTo: String!
  }

  type Mutation {
    createScheduleConfig(scheduleConfigInput: ScheduleConfigInputType!): Int!
  }
`;

module.exports = scheduleConfigSchema;
