const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);

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

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
