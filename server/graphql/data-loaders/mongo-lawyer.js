const DataLoader = require("dataloader");

const batchMongoLawyers = async (mongoLawyerIds, { MongoLawyer }) => {
  const lawyers = await MongoLawyer.find({ _id: mongoLawyerIds });

  return mongoLawyerIds.map((id) =>
    lawyers.find((lawyer) => lawyer._id.toString() === id)
  );
};

const mongoLawyerLoader = (models) =>
  new DataLoader((ids) => batchMongoLawyers(ids, models));

module.exports = mongoLawyerLoader;
