// utils/graphqlHelpers.ts

import { z } from "zod";
import { GraphQLContext } from "../../graphql/types/shared";

export interface GraphQLResponse<T> {
  success: boolean;
  message: string;
  data?: T | null;
  status?: string | null;
}

export const formatResponse = <T>(
  success: boolean,
  message: string,
  data: T | null = null,
  status: string | null = null
): GraphQLResponse<T> => ({
  success,
  message,
  data,
  status,
});

export async function handleQuery<T>({
  handlerFunction,
  context,
  input,
  fallbackErrorMessage = "Internal server error occurred",
}: {
  handlerFunction: (
    input: unknown,
    context: GraphQLContext
  ) => Promise<GraphQLResponse<T>>;
  context: GraphQLContext;
  input: unknown;
  fallbackErrorMessage?: string;
}): Promise<GraphQLResponse<T | null>> {
  try {

    return await handlerFunction(input, context);
  } catch (error) {
    logError({ fallbackErrorMessage, error });
    return formatResponse(false, fallbackErrorMessage, null, "UNKNOWN_ERROR");
  }
}

export async function handleMutation<T, S extends z.ZodType<unknown>>({
  handlerFunction,
  context,
  input,
  validationSchema,
  fallbackErrorMessage = "Internal server error occurred",
}: {
  handlerFunction: (
    input: z.infer<S>,
    context: GraphQLContext
  ) => Promise<GraphQLResponse<T>>;
  context: GraphQLContext;
  input: z.infer<S>;
  validationSchema: S;
  fallbackErrorMessage?: string;
}): Promise<GraphQLResponse<T | null>> {
  try {
      const { success, data, error } = validationSchema.safeParse(input);
      if (!success) {
        return formatResponse(
          false,
          JSON.stringify(error.format()),
          null,
          "INPUT_VALIDATION_ERROR"
        );
      }
      // Use parsed data for extra type safety, if required
      input = data;

    return await handlerFunction(input, context);
  } catch (error) {
    logError({ fallbackErrorMessage, error });
    return formatResponse(false, fallbackErrorMessage, null, "UNKNOWN_ERROR");
  }
}

const logError = ({
  fallbackErrorMessage,
  error,
}: {
  fallbackErrorMessage: string;
  error: unknown;
}) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  console.error("🚨 error occured while executing graphql endpoint \n", {
    fallbackErrorMessage,
    errorMessage,
    error,
  });
};
