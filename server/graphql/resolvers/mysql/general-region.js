const GeneralRegion = require("../../../models/mysql/general-region");
const yup = require("yup");

const schema = yup.object().shape({
  regionName: yup.string().trim().min(1).max(255).required(),
});

const generalRegionResolver = {
  Query: {
    generalRegion: async (_, { id }) => {
      const generalRegion = await GeneralRegion.findOne({ id });
      return generalRegion.id;
    },
  },
  Mutation: {
    createGeneralRegion: async (_, { regionName }) => {
      await schema.validate({ regionName });

      const doesExist = await GeneralRegion.findOne({ where: { regionName } });

      if (doesExist) {
        const error = new Error("general region already exist");
        error.statusCode = 422;
        throw error;
      }

      const generalRegion = await GeneralRegion.create({ regionName });
      return generalRegion.id;
    },
  },
};

module.exports = generalRegionResolver;
