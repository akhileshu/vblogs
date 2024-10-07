// /app/api/graphql/route.ts
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import resolvers from "@/graphql/schema/resolvers";
import typeDefs from "@/graphql/schema/typeDefs";
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
  /*   await rateLimiter(
    request,
    response,
    RATE_LIMIT_REQUESTS,
    RATE_LIMIT_TIME_WINDOW
  );
  // If the response was blocked by rate limiter, stop further execution
  if (response.writableEnded) return;
   */
  return handler(request, response);
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  // rate limit here too
  return handler(request, response);
}
