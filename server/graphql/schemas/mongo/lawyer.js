const { gql } = require("apollo-server-express");

const mongoLawyerSchema = gql`
  type MongoLawyer {
    _id: String!
    mysqlLawyerId: Int!
    lawyerName: String!
    lawyerProfileImageUrl: String!
    lawyerCharacters: [String!]!
    title: String!
    detailTitle: String!
    companyName: String!
    companyAddress: String!
    companyPhoneNumber: String!
    domains: [String!]!
    certification: String!
    capabilities: [Capability!]!
    graduation: String!
    priceInformation: [PriceInformation!]!
    detailCertification: [DetailCertification!]!
    detailGraduation: [DetailGraduation!]!
    activities: [Activity!]!
    expertCertification: Boolean!
    gender: String!
    region: String!
    specialQualification: [String!]!
    experience: [String!]!
    lauguage: [String!]!
    isPreminum: Boolean!
    priorityScore: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Capability {
    kind: String!
    capabilities: [String!]!
  }

  type PriceInformation {
    serviceName: String!
    minPrice: Int!
    serviceTime: String!
  }

  type DetailCertification {
    period: String!
    content: String!
  }

  type DetailGraduation {
    period: String!
    content: String!
  }

  type Activity {
    period: String!
    content: String!
  }

  input CapabilityInputType {
    kind: String!
    capabilities: [String!]!
  }

  input PriceInformationInputType {
    serviceName: String!
    minPrice: Int!
    serviceTime: String!
  }

  input DetailCertificationInputType {
    period: String!
    content: String!
  }

  input DetailGraduationInputType {
    period: String!
    content: String!
  }

  input ActivityInputType {
    period: String!
    content: String!
  }

  input MongoLawyerInputType {
    mysqlLawyerId: Int!
    lawyerName: String!
    lawyerProfileImageUrl: String!
    lawyerCharacters: [String!]!
    title: String!
    detailTitle: String!
    companyName: String!
    companyAddress: String!
    companyPhoneNumber: String!
    domains: [String!]!
    certification: String!
    capabilities: [CapabilityInputType!]!
    graduation: String!
    priceInformation: [PriceInformationInputType!]!
    detailCertification: [DetailCertificationInputType!]!
    detailGraduation: [DetailGraduationInputType!]!
    activities: [ActivityInputType!]!
    expertCertification: Boolean!
    gender: String!
    region: String!
    specialQualification: [String!]!
    experience: [String!]!
    lauguage: [String!]!
    isPreminum: Boolean!
    priorityScore: Int!
  }

  type Query {
    mongoLawyer(_id: String!): MongoLawyer!
  }

  type Mutation {
    createMongoLawyer(mongoLawyerInput: MongoLawyerInputType!): String!
  }
`;

module.exports = mongoLawyerSchema;
