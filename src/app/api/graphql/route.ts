import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { schema } from "@/shared/helpers/typeGraphql/createGraphQLSchema";
import prisma from "@/shared/utils/prisma/prismaClient";

const createApolloServer = async () => {
  return new ApolloServer({
    schema
  });
};

const setupHandler = async () => {
  const apolloServer = await createApolloServer();
  return startServerAndCreateNextHandler(apolloServer, {
    context: async () => {
      return { prisma };
    },
  });
};

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const handler = await setupHandler();
  return handler(request, response);
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  const handler = await setupHandler();
  return handler(request, response);
}
