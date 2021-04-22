const { Sequelize, Transaction } = require("sequelize");
const cls = require("cls-hooked");
const namespace = cls.createNamespace("lawtalk-clone-namespace");
Sequelize.useCLS(namespace);

const sequelize = new Sequelize("lawtalk", "jinsoo", "jinsoo", {
  dialect: "mysql",
  host: "localhost",
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
  isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ,
});

module.exports = sequelize;
