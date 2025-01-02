import { getErrorMsg } from "@/shared/utils/getErrorMsg";
import { ZodError } from "zod";
import { Failure, FieldErrors } from "../types/response";

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
  error: ZodError<Schema>
): Failure<Schema> => {
  return {
    success: false,
    errorMsg: getErrorMsg(error),
    fieldErrors: error.formErrors.fieldErrors as FieldErrors<Schema>,
  };
};
