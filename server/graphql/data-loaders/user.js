const DataLoader = require("dataloader");
const { repeatableReadTransaction } = require("../../util/transaction");

const batchUsersbyUserId = async (userIds, { User }) => {
  return await repeatableReadTransaction(async () => {
    const users = await User.findAll({
      where: { id: userIds },
    });
    return userIds.map((id) => users.find((user) => user.id === id));
  });
};

const userLoader = (models) => ({
  byUserId: new DataLoader((ids) => batchUsersbyUserId(ids, models)),
});

module.exports = userLoader;
