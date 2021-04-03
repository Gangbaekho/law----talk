const redisClient = require("../util/redisClient");

exports.getRedis = (req, res, next) => {
  console.log(req._parsedOriginalUrl.path);

  redisClient.get("test", async (err, test) => {
    if (err) {
      console.log(err);
    }
    if (test) {
      res.status(200).json({
        message: "success",
        test: JSON.parse(test),
      });
    }
  });
};
