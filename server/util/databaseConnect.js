const mongoose = require("mongoose");
const sequelize = require("./mysql");
const redis = require("redis");

const databaseConnect = (server) => {
  mongoose
    .set("debug", true)
    .connect("mongodb://localhost:27017/lawtalk", { useNewUrlParser: true })
    .then((result) => {
      return sequelize.sync({ alter: true });
    })
    .then((result) => {
      const redisClient = redis.createClient(6379);
      redisClient.on("error", (error) => {
        console.log(error);
      });
      return;
    })
    .then((result) => {
      return server.listen(4000);
    })
    .then(() => {
      console.log(`
      Server is running!
      Listening on port 4000.
      `);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = databaseConnect;
