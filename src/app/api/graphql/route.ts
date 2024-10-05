// /app/api/graphql/route.ts
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import resolvers from "@/graphql/resolvers";
import typeDefs from "@/graphql/typeDefs";
import { NextApiRequest, NextApiResponse } from "next";

// Initialize the ApolloServer instance
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the Apollo server and create a Next.js handler
const handler = startServerAndCreateNextHandler(apolloServer);

// Export the request handler for Next.js API route
export async function GET(request: NextApiRequest, response: NextApiResponse) {
  return handler(request, response);
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  return handler(request, response);
}
