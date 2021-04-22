

const yup = require("yup");

const schema = yup.object().shape({
  domainName: yup.string().trim().min(1).max(255).required(),
});

const generalDomainResolver = {
  Query: {
    generalDomain: async (_, { id }, { models, transaction }) => {
      return await transaction.repeatableReadTransaction(async () => {
        const generalDomain = await models.GeneralDomain.findOne({
          where: { id },
        });
        return generalDomain;
      });
    },
  },
  Mutation: {
    createGeneralDomain: async (_, { domainName }, { models, transaction }) => {
      await schema.validate({ domainName });

      return await transaction.serializableTransaction(async () => {
        const doesExist = await models.GeneralDomain.findOne({
          where: { domainName },
        });

        if (doesExist) {
          const error = new Error("general domain already exist");
          error.statusCode = 422;
          throw error;
        }

        const generalDomain = await models.GeneralDomain.create({ domainName });
        return generalDomain.id;
      });
    },
  },
  GeneralDomain: {
    specificDomains: async ({ id }, _, { models,transaction }) => {
      return await transaction.repeatableReadTransaction(async ()=> {
        const specificDomains = await models.SpecificDomain.findAll({where:generalDomainId:id});
      })
    },
  },
};

module.exports = generalDomainResolver;
