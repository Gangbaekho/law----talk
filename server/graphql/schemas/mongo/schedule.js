const { gql } = require("apollo-server-express");

const mongoScheduleSchema = gql`
  type MongoSchedule {
    _id: String!
    lawyerId: String!
    mysqlLawyerId: Int!
    fifteenConsultingAvailableTime: [AvailableTime!]!
    thirtyConsultingAvailableTime: [AvailableTime!]!
    createdAt: String!
    updatedAt: String!
  }

  type AvailableTime {
    time: String!
    isAvailable: Boolean!
  }

  input AvailableTimeInputType {
    time: String!
    isAvailable: Boolean!
  }

  input MongoScheduleInputType {
    lawyerId: String!
    mysqlLawyerId: Int!
    fifteenConsultingAvaliableTime: [AvailableTimeInputType!]!
    thirtyConsultingAvaliableTime: [AvailableTimeInputType!]!
  }

  type Query {
    mongoSchedule(_id: String!): MongoSchedule!
  }

  type Mutation {
    createMongoSchedule(mongoScheduleInput: MongoScheduleInputType!): String!
  }
`;

module.exports = mongoScheduleSchema;
