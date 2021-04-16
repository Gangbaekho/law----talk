const path = require("path");

const startApolloServer = require("./util/apollo-server-express-config");
const cron = require("node-cron");
const express = require("express");
const bodyParser = require("body-parser");

const typeDefs = require("./graphql/schemas");
const resolvers = require("./graphql/resolvers");
const { makeExecutableSchema } = require("graphql-tools");
const databaseConnect = require("./util/databaseConnect");
const associateTables = require("./models/mysql/association-config");
const { graphqlExpress } = require("apollo-server-express");

// const testMain = async () => {
//   const schema = makeExecutableSchema({
//     typeDefs: typeDefs,
//     resolvers: resolvers,
//   });

//   const app = express();

//   app.use(bodyParser.json());

//   app.use(express.static(path.join(__dirname, "public")));

//   // DEFAULT RESPONSE HEADER SETTING
//   app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Controll-Allow-Methods",
//       "GET,POST,PUT,DELETE,PATCH,OPTIONS"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );

//     if (req.method === "OPTIONS") {
//       return res.sendStatus(200);
//     }
//     next();
//   });

//   app.use("/graphql", graphqlExpress({ schema }));

//   // ERROR HANDLING MIDDLEWARE
//   app.use((error, req, res, next) => {
//     console.log(error);
//     const statusCode = error.statusCode || 500;
//     const message = error.message || "Internal server error";
//     return res.status(statusCode).json({ message: message });
//   });

//   associateTables();
//   await databaseConnect();

//   cron.schedule("* * * * *", () => {
//     console.log("running a test every minute");
//   });
// };

const main = async () => {
  const { server, app } = await startApolloServer();

  app.use(express.static(path.join(__dirname, "public")));

  // DEFAULT RESPONSE HEADER SETTING
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Controll-Allow-Methods",
      "GET,POST,PUT,DELETE,PATCH,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

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

  cron.schedule("* * * * *", () => {
    console.log("running a test every minute");
  });
};

main();
// testMain();
