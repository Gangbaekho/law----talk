const sequelize = require("./mysql");
const { Transaction } = require("sequelize");

exports.repeatableReadTransaction = async (callBack) => {
  return await sequelize.transaction(
    {
      isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ,
    },
    (t) => callBack()
  );
};

exports.serializableTransaction = async (callback) => {
  return await sequelize.transaction(
    {
      isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE,
    },
    (t) => callback()
  );
};
