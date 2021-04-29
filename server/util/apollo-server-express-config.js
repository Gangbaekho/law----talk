const typeDefs = require("../graphql/schemas");
const resolvers = require("../graphql/resolvers");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const databaseConnect = require("./databaseConnect");

const associateTables = require("../models/mysql/association-config");

const isAuth = require("../middleware/is-auth");

const models = require("../models");
const dataLoaders = require("../graphql/data-loaders");
const testRoutes = require("../routes/test");
const transaction = require("../util/transaction");

const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const redisClient = require("./redisClient");

const SESSION_SECRET_KEY = require("./session-secret-key");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      Id: isAuth(req),
      models,
      dataLoaders: dataLoaders(models),
      transaction,
      session: req.session,
    }),
  });
  await server.start();

  const app = express();

  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      name: "qid",
      saveUninitialized: false,
      secret: SESSION_SECRET_KEY,
      resave: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      },
    })
  );

  app.use("/test", testRoutes);

  server.applyMiddleware({ app });

  associateTables();
  await databaseConnect();

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

module.exports = startApolloServer;
