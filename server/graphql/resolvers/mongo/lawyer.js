const mongoLaywerResolver = {
  Query: {
    mongoLawyer: async (_, { _id }, { dataLoaders }) => {
      return dataLoaders.mongoLawyerLoader.byMongoLawyerId.load(_id);
    },
  },

  Mutation: {
    createMongoLawyer: async (_, { mongoLawyerInput }, { models }) => {
      const {
        mysqlLawyerId,
        lawyerName,
        lawyerProfileImageUrl,
        lawyerCharacters,
        title,
        detailTitle,
        companyName,
        companyAddress,
        companyPhoneNumber,
        domains,
        certification,
        capabilities,
        graduation,
        priceInformation,
        detailCertification,
        detailGraduation,
        activities,
        expertCertification,
        gender,
        region,
        specialQualification,
        experience,
        lauguage,
        isPreminum,
        priorityScore,
      } = mongoLawyerInput;

      const lawyer = new models.MongoLawyer({
        mysqlLawyerId,
        lawyerName,
        lawyerProfileImageUrl,
        lawyerCharacters,
        title,
        detailTitle,
        companyName,
        companyAddress,
        companyPhoneNumber,
        domains,
        certification,
        capabilities,
        graduation,
        priceInformation,
        detailCertification,
        detailGraduation,
        activities,
        expertCertification,
        gender,
        region,
        specialQualification,
        experience,
        lauguage,
        isPreminum,
        priorityScore,
      });

      const createdLawyer = await lawyer.save();

      return createdLawyer._id;
    },
  },
  MongoLawyer: {
    mongoSchedule: async ({ _id }, _, { dataLoaders }) => {
      return dataLoaders.mongoScheduleLoader.byMongoLawyerId.load(_id);
    },
  },
};

module.exports = mongoLaywerResolver;
