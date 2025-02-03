"use client";
import { useEffect } from "react";
import { appToast } from "@/shared/lib/toast";
import { extractResultData } from "@/server-actions/utils/response";
import { Response } from "@/server-actions/types/response";
import { useFormState } from "react-dom";

type UseFormHandlerParams<T, U> = {
  actionHandler: (
    prevState: unknown,
    formData: FormData
  ) => Promise<Response<T, U>>;
  onSuccess?: (data: T | undefined) => void;
  successMessage?: string;
};

export function useFormHandler<T, U>({
  actionHandler,
  onSuccess,
  successMessage="completed successfully",
}: UseFormHandlerParams<T, U>) {
  const [result, formAction] = useFormState(actionHandler, null);
  const { data, success, errorMsg, fieldErrors } = extractResultData(result);

  /* learning : we faced issue of toast being shown twice - fix - seperated effects of showing toast and handling onSuccess() */
  /* bug : doen't shows toast if result fields are same on 2nd form submit  */
  useEffect(() => {
    if (errorMsg) {
      appToast.error(errorMsg);
      console.error(errorMsg);
    }
    else if (success) {
      appToast.success(successMessage);
    }
  }, [errorMsg, success, successMessage]);
  
  useEffect(() => {
     if (success && onSuccess)onSuccess(data);
  }, [success, onSuccess, data]);

  return { data, success, errorMsg, fieldErrors, formAction };
}
