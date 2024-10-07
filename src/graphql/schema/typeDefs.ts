import { gql } from "apollo-server-core";


const typeDefs = gql`
  # todo:gql does not support generic ,can achieve similar functionality using interfaces and unions.
  # for usage with BaseResponse , this is very generic , here data can be null handling unexpected - non-error -failure cases

  interface BaseResponse {
    success: Boolean!
    message: String!
    status: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type UsersResponse implements BaseResponse {
    success: Boolean!
    message: String!
    status: String
    data: [User!]
  }
  type UserResponse implements BaseResponse {
    success: Boolean!
    message: String!
    status: String
    data: User
  }

  type Query {
    getUsers: UsersResponse!
  }

  type Mutation {
    createUser(name: String!, email: String!): UserResponse!
  }
`;

export default typeDefs;
