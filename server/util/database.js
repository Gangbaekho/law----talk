const Sequelize = require("sequelize");

const sequelize = new Sequelize("lawtalk", "jinsoo", "jinsoo", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
