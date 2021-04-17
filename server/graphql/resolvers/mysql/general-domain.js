const GeneralDomain = require("../../../models/mysql/general-domain");

const yup = require("yup");

const schema = yup.object().shape({
  domainName: yup.string().trim().min(1).max(255).required(),
});

const generalDomainResolver = {
  Query: {
    generalDomain: async (_, { id }) => {
      const generalDomain = await GeneralDomain.findOne({ id });
      return generalDomain.id;
    },
  },
  Mutation: {
    createGeneralDomain: async (_, { domainName }) => {
      await schema.validate({ domainName });

      const doesExist = await GeneralDomain.findOne({ where: { domainName } });

      if (doesExist) {
        const error = new Error("general domain already exist");
        error.statusCode = 422;
        throw error;
      }

      const generalDomain = await GeneralDomain.create({ domainName });
      return generalDomain.id;
    },
  },
};

module.exports = generalDomainResolver;
