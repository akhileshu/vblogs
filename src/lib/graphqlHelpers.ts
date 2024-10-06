// utils/graphqlHelpers.ts

import { GraphQLContext } from "@/graphql/common";
import { z } from "zod";

// Define the structure of a generic response
export interface GraphQLResponse<T> {
  success: boolean;
  message: string;
  data?: T | null;
  status?: string | null;
}

// Utility function to format responses
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

export default async function executeAsyncAndRespond<
  T, // Response type
  S extends z.ZodType<unknown>, // Zod schema type
  C extends GraphQLContext // Context type
>({
  asyncFunction,
  context,
  validationSchema,
  inputData,
}: {
  asyncFunction: (
    inputData: z.infer<S>,
    context: C
  ) => Promise<GraphQLResponse<T>>; // Async handler, receives typed input and context
  context: C; // Typed context
  validationSchema?: S; // Optional Zod schema
  inputData?: z.infer<S>; // Infer input type from schema
}): Promise<GraphQLResponse<T | null>> {
  try {
    // Validate input using Zod if validationSchema and inputData are provided
    if (validationSchema && inputData) {
      const { success, data, error } = validationSchema.safeParse(inputData);
      if (!success) {
        return formatResponse(
          false,
          JSON.stringify(error),
          null,
          "INPUT_VALIDATION_ERROR"
        );
      }

      // Use parsed data for extra type safety, if required
      inputData = data;
    }

    // Call the async function with validated inputData and context
    const response = await asyncFunction(inputData, context);
    return response;
  } catch (error) {
    // Catch known or unknown errors
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error({ errorMessage, error });
    return formatResponse(false, errorMessage, null, "UNKNOWN_ERROR");
  }
}
