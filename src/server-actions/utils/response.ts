import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { ZodError } from "zod";
import { Failure, FieldErrors, Response } from "../types/response";
import { FieldsError } from "@/shared/lib/errors/customError";

//handle error thrown by prisma service - throws parsed/understandable error message in Error object
export const failure = (
  errorOrMessage: unknown | string
): Failure<undefined> => {
  const errorMsg =
    typeof errorOrMessage === "string"
      ? errorOrMessage
      : getErrorMsg(errorOrMessage);
  return {
    success: false,
    errorMsg,
  };
};

export const failureWithFieldErrors = <Schema>(
  error: ZodError<Schema>|FieldsError
): Failure<Schema> => {
    return {
      success: false,
      errorMsg: error.message,
      fieldErrors:
        error instanceof FieldsError
          ? (error.fieldErrors as FieldErrors<Schema>)
           : (error.formErrors.fieldErrors as FieldErrors<Schema>),
    };
  }


  export function extractResultData<Data, Schema>(
    result: Response<Data, Schema> | null
  ) {
    if (!result) return { success: false };
    if (result?.success) {
      return { data: result.data, success: true };
    }
    return {
      errorMsg: result.errorMsg,
      fieldErrors: result.fieldErrors,
      success: false,
    };
  }
