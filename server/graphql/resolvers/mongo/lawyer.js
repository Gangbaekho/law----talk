const mongoLaywerResolver = {
  Query: {
    mongoLawyer: async (_, { _id }) => {
      const laywer = await Lawyer.findOne({ _id });
      return laywer._id;
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
};

module.exports = mongoLaywerResolver;
