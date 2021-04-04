const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lawyerSchema = new Schema({
  lawyerName: {
    type: Schema.Types.String,
    required: true,
  },
  laywerProfileImageUrl: {
    type: Schema.Types.String,
    required: true,
  },
  laywerCharacters: {
    type: [Schema.Types.String],
    default: [],
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  detailTitle: {
    type: Schema.Types.String,
    required: true,
  },
  companyName: {
    type: Schema.Types.String,
    required: true,
  },
  companyAddress: {
    type: Schema.Types.String,
    required: true,
  },
  companyPhoneNumber: {
    type: Schema.Types.String,
    required: true,
  },
  domains: {
    type: [Schema.Types.String],
  },
  certification: {
    type: Schema.Types.String,
  },
  capabilities: {
    type: [
      {
        kind: Schema.Types.String,
        capabilities: [Schema.Types.String],
      },
    ],
  },
  graduation: {
    type: Schema.Types.String,
  },
  priceInformation: {
    type: [
      {
        serviceName: Schema.Types.String,
        minPrice: Schema.Types.Number,
        serviceTime: Schema.Types.String,
      },
    ],
  },
  detailCertification: {
    type: [
      {
        period: Schema.Types.String,
        content: Schema.Types.String,
      },
    ],
  },
  detailGraduation: {
    type: [
      {
        period: Schema.Types.String,
        content: Schema.Types.String,
      },
    ],
  },
  activities: {
    type: [
      {
        period: Schema.Types.String,
        content: Schema.Types.String,
      },
    ],
  },
});

module.exports = mongoose.model("Lawyer", lawyerSchema);
