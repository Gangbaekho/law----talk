const DataLoader = require("dataloader");

const batchMongoLawyersByMongoLawyerIds = async (
  mongoLawyerIds,
  { MongoLawyer }
) => {
  const lawyers = await MongoLawyer.find({ _id: mongoLawyerIds });

  return mongoLawyerIds.map((id) =>
    lawyers.find((lawyer) => lawyer._id.toString() === id)
  );
};

const mongoLawyerLoader = (models) => ({
  byMongoLawyerId: new DataLoader((mongoLawyerIds) =>
    batchMongoLawyersByMongoLawyerIds(mongoLawyerIds, models)
  ),
});

module.exports = mongoLawyerLoader;
