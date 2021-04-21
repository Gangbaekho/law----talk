const Sequelize = require("sequelize");

const sequelize = new Sequelize("lawtalk", "jinsoo", "jinsoo", {
  dialect: "mysql",
  host: "localhost",
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
