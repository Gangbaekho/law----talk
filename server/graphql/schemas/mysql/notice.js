const { gql } = require("apollo-server-express");

const noticeSchema = gql`
  type Notice {
    id: Int!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    notice(id: Int!): Notice!
    getNotices(offset: Int): [Notice!]!
  }

  input NoticeInputType {
    title: String!
    content: String!
  }

  type Mutation {
    createNotice(noticeInput: NoticeInputType!): Int!
  }
`;
