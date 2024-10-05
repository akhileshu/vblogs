import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

export default typeDefs;
