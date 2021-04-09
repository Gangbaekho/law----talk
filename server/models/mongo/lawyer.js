const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lawyerSchema = new Schema(
  {
    mysqlLaywerId: {
      type: Schema.Types.Number,
      required: true,
    },
    lawyerName: {
      type: Schema.Types.String,
      required: true,
    },
    laywerProfileImageUrl: {
      type: Schema.Types.String,
      required: true,
    },
    // 답변가, 크리에이터, 예약준수 뭐 이런거.
    laywerCharacters: {
      type: [Schema.Types.String],
      default: [],
    },
    // 디테일이 아닌 리스트에서 보여주는 소개
    title: {
      type: Schema.Types.String,
      required: true,
    },
    // 디테일 페이지에서 보여주는 소개
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
    // 디테일 페이지에서의 분야
    domains: {
      type: [Schema.Types.String],
    },
    // 자격
    certification: {
      type: Schema.Types.String,
    },
    // 경험 및 인증정보
    capabilities: {
      type: [
        {
          kind: Schema.Types.String,
          capabilities: [Schema.Types.String],
        },
      ],
    },
    // 학력
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
    // 변호사 정보에서의 자격
    detailCertification: {
      type: [
        {
          period: Schema.Types.String,
          content: Schema.Types.String,
        },
      ],
    },
    // 변호사 정보에서의 학력
    detailGraduation: {
      type: [
        {
          period: Schema.Types.String,
          content: Schema.Types.String,
        },
      ],
    },
    // 변호사 정보에서의 활동사항
    activities: {
      type: [
        {
          period: Schema.Types.String,
          content: Schema.Types.String,
        },
      ],
    },
    // 필터 검색을 위한 전문 인증여부
    expertCertification: {
      type: Schema.Types.Boolean,
      required: true,
    },
    // 필터 검색을 위한 성별
    gender: {
      type: Schema.Types.String,
      required: true,
    },
    // 필터 검색을 위한 지역 정보
    region: {
      type: Schema.Types.String,
      required: true,
    },
    // 필터 검색을 위한 특수 자격
    specialQualification: {
      type: [Schema.Types.String],
    },
    // 필터 검색을 위한 경험
    experience: {
      type: [Schema.Types.String],
    },
    // 필터 검색을 위한 가능언어
    lauguage: {
      type: [Schema.Types.String],
    },
    isPreminum: {
      type: Schema.Types.Boolean,
      required: true,
    },
    priorityScore: {
      type: Schema.Types.Boolean,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lawyer", lawyerSchema);
