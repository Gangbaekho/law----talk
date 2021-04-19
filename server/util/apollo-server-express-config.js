const typeDefs = require("../graphql/schemas");
const resolvers = require("../graphql/resolvers");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const databaseConnect = require("./databaseConnect");

const associateTables = require("../models/mysql/association-config");

const isAuth = require("../middleware/is-auth");

const consultingAnswerLoader = require("../graphql/data-loaders/consulting-answer");
const DataLoader = require("dataloader");
const models = require("../models");
const _ = require("lodash");

const batchConsultingAnswers = async (ids, { ConsultingAnswer }) => {
  const consultingAnswers = await ConsultingAnswer.findAll({
    where: { consultingQuestionId: ids },
  });
  return ids.map((id) =>
    consultingAnswers.filter((c) => c.consultingQuestionId === id)
  );
};

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      Id: isAuth(req),
      models,
      consultingAnswerLoader: {
        consultingQuestion: new DataLoader((ids) =>
          batchConsultingAnswers(ids, models)
        ),
      },
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
