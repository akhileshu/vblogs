/* 
?GraphQL Codegen generates TypeScript types and operations based on your GraphQL schema and queries, enhancing type safety and developer experience in your application.

?schema
url or .graphql, .gql

?documents
path to GraphQL queries, mutations, and subscriptions
often found in .graphql, .gql, or sometimes directly in .js, .ts, or .tsx files

?typescript Plugin
*Purpose: Generates TypeScript types based on your GraphQL schema.
export type User = {
  id: string;  // ID!
  name: string; // String!
  age?: number; // Int (nullable)
};

?@graphql-codegen/typescript-operations
*Generates TypeScript types for your GraphQL operations (queries, mutations, subscriptions).
for query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}

*src/generated/graphql.ts
export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  user: {
    id: string;
    name: string;
    email: string;
  };
};

?typescript-resolvers
*QueryResolvers is generated type signature of resolver
Implementing the `getUser` resolver
const resolvers: QueryResolvers = {
  getUser: async (_parent, args, _context) => {
    const user = await findUserById(args.id); // `args.id` is strongly typed
    return user; // Return value is expected to be of type `User`
  },
};

?typescript-graphql-request
*Use this when you are working with the graphql-request library to send GraphQL queries/mutations and want type-safe client functions generated automatically
const sdk = getSdk(client);

sdk.GetUser({ id: '123' }).then((response) => {
  console.log(response.user);
});

?typescript-react-apollo
*use with apollo-client pckg, generates ypeScript hooks for your GraphQL queries/mutations.
import { GetUserDocument, GetUserQuery } from './generated/graphql';

Generated hook for Apollo Client
export function useGetUserQuery(id: string) {
  return useQuery<GetUserQuery>(GetUserDocument, {
    variables: { id },
  });
}
*/