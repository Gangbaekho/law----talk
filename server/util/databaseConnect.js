const mongoose = require("mongoose");
const sequelize = require("./mysql");
const redis = require("redis");

// "mongodb://DESKTOP-PTPFHLV:27017,DESKTOP-PTPFHLV:27018,DESKTOP-PTPFHLV:27019/lawtalk?replicaSet=rs"
// "mongodb://localhost:27017/lawtalk/?replicaSet=rs"
// run-rs -v 4.4.4 --shell (명령어)
const databaseConnect = () => {
  mongoose
    .set("debug", true)
    .connect("mongodb://localhost:27017/lawtalk", {
      useNewUrlParser: true,
    })
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
    .catch((error) => {
      console.log(error);
    });
};

module.exports = databaseConnect;
