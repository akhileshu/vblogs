import { z } from "zod";
import { ResponseClass, Context } from "./types";
import { logError } from "@/shared/utils/logError";

export async function executeWithValidation<S extends z.ZodType<unknown>>({
  executeFn,
  ResponseClass,
  inputData,
  inputValidationSchema,
  ctx,
  fallbackErrorMessage = "An unexpected error occurred. Please try again later.",
}: {
  executeFn: () => Promise<InstanceType<typeof ResponseClass>>;
  ResponseClass: ResponseClass<null>;
  inputData?: z.infer<S>;
  inputValidationSchema?: S;
  ctx?: Context;
  fallbackErrorMessage?: string;
}): Promise<InstanceType<typeof ResponseClass>> {
  try {
    if (inputData && inputValidationSchema) {
      const { success, data, error } =
        inputValidationSchema?.safeParse(inputData);
      console.log(ctx, data);
      if (!success) {
        return new ResponseClass({
          data: null,
          success: false,
          message: JSON.stringify(error.format()),
          status: "INPUT_VALIDATION_ERROR",
        });
      }
    }
    return await executeFn();
  } catch (error) {
    logError({ fallbackErrorMessage, error });
    return new ResponseClass({
      data: null,
      success: false,
      message: fallbackErrorMessage,
      status: "INTERNAL_SERVER_ERROR",
    });
  }
}
