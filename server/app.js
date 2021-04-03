const path = require("path");

const databaseConnect = require("./util/databaseConnect");
const redisClient = require("./util/redisClient");
const cron = require("node-cron");

const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user");
const testRouter = require("./routes/test");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);
app.use("/test", testRouter);

// DEFAULT RESPONSE HEADER SETTING
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Controll-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ERROR HANDLING MIDDLEWARE
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  return res.status(statusCode).json({ message: message });
});

databaseConnect(app);

redisClient.set(
  "test",
  JSON.stringify(["test1", "test2"]),
  function (err, res) {
    if (err) {
      console.log(err);
    }
    console.log(res);
  }
);

cron.schedule("* * * * *", () => {
  console.log("running a test every minute");
});
