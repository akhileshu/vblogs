import executeAsyncAndRespond, { formatResponse } from "@/lib/graphqlHelpers";
import { MutationCreateUserArgs, Resolvers, User } from "../generated/graphql";
import { GraphQLContext } from "./types/shared";
import { createUserSchema } from "./zodSchemas/user";

const users: User[] = [];

const resolvers: Resolvers = {
  Query: {
    getUsers: async (_, inputData, context: GraphQLContext) =>
      executeAsyncAndRespond({
        asyncFunction: (inputData, context) =>
          getUsersHandler(inputData, context),
        context,
      }),
  },
  Mutation: {
    createUser: async (_, inputData, context: GraphQLContext) =>
      executeAsyncAndRespond({
        asyncFunction: (inputData, context) =>
          createUserHandler(inputData, context),
        context,
        validationSchema: createUserSchema,
        inputData,
      }),
  },
};

async function createUserHandler(
  input: MutationCreateUserArgs,
  context: GraphQLContext // Typed context here
) {
  console.log(context);
  const { email, name } = input;
  const newUser = { id: "id", name, email };
  users.push(newUser);
  return formatResponse(true, "success", newUser);
}

async function getUsersHandler(input: unknown, context: GraphQLContext) {
  console.log(context);
  return formatResponse(true, "success", users);
}

export default resolvers;
