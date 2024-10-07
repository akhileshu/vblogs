import { MutationCreateUserArgs, Resolvers, User } from "@/generated/graphql";
import { GraphQLContext } from "../types/shared";
import { createUserSchema } from "@/utils/graphql/zod/user";
import {
  formatResponse,
  handleMutation,
  handleQuery,
} from "@/utils/graphql/serverUtils";

const users: User[] = [];

const resolvers: Resolvers = {
  Query: {
    getUsers: async (_, input, context: GraphQLContext) =>
      handleQuery({
        handlerFunction: getUsersHandler,
        context,
        input,
        fallbackErrorMessage: "Failed to get users",
      }),
  },
  Mutation: {
    createUser: async (_, input, context: GraphQLContext) =>
      handleMutation({
        handlerFunction: createUserHandler,
        context,
        input,
        validationSchema: createUserSchema,
      }),
  },
};

async function createUserHandler(
  input: MutationCreateUserArgs,
  context: GraphQLContext
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
