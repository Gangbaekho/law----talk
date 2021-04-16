const typeDefs = require("../graphql/schemas");
const resolvers = require("../graphql/resolvers");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const databaseConnect = require("./databaseConnect");

const associateTables = require("../models/mysql/association-config");

const isAuth = require("../middleware/is-auth");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      Id: isAuth(req),
    }),
  });
  await server.start();

  const app = express();

  server.applyMiddleware({ app });

  associateTables();
  await databaseConnect();

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

module.exports = startApolloServer;
