const SpecificDomain = require("../../../models/mysql/specific-domain");
const yup = require("yup");

const schema = yup.object().shape({
  domainName: yup.string().min(1).max(255).required(),
});

const SpecificDomainResolver = {
  Query: {
    specificDomain: async (_, { id }) => {
      const specificDomain = await SpecificDomain.findOne({ id });
      return specificDomain.id;
    },
  },
  Mutation: {
    createSpecificDomain: async (_, { generalDomainId, domainName }) => {
      await schema.validate({ domainName });

      const doesExist = await SpecificDomain.findOne({ where: { domainName } });

      if (doesExist) {
        const error = new Error("specific domain already exist");
        error.statusCode = 422;
        throw error;
      }

      const specificDomain = await SpecificDomain.create({
        generalDomainId,
        domainName,
      });

      return specificDomain.id;
    },
  },
};

module.exports = SpecificDomainResolver;
