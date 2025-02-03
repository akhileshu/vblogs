"use client";
import { cn } from "@/lib/utils";
import { Response } from "@/server-actions/types/response";
import { extractResultData } from "@/server-actions/utils/response";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import { appToast } from "@/shared/lib/toast";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { revalidateTagUtil } from "../utils/revalidateTagUtils";
import { MdOutlineDelete } from "react-icons/md";

type ActionFormProps<T,U> = {
  className?: string;
  actionHandler: (
    prevState: unknown,
    formData: FormData
  ) => Promise<Response<T,U>>; 
  hiddenFields: Record<string, string>; 
  successMessage?: string;
  tagToRevalidate?: string; 
  confirmMessage?: string;
};

export const DeletionForm = <T,U>({
  className ,
  actionHandler,
  hiddenFields,
  successMessage = "deleted successfully",
  tagToRevalidate,
  confirmMessage = "Confirm deleting?",
}: ActionFormProps<T,U>) => {
    
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initialState = {
    fieldErrors: undefined,
    errorMsg: undefined,
    data: undefined,
    success: false,
  };

  const [result, formAction] = useFormState(actionHandler, null);
  const { success, errorMsg } = extractResultData(result);

  useEffect(() => {
    if (errorMsg) {
      appToast.error(errorMsg);
      console.log(errorMsg);
    }
    if (success) {
      appToast.success(successMessage);
      if (tagToRevalidate) {
        revalidateTagUtil(tagToRevalidate);
      }
    }
  }, [errorMsg, success, successMessage, tagToRevalidate]);

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!window.confirm(confirmMessage)) {
          e.preventDefault();
        }
      }}
    >
      {Object.entries(hiddenFields).map(([name, value]) => (
        <input key={name} name={name} type="hidden" value={value} />
      ))}
      <SubmitButton
        className={cn("hover:bg-red-200 bg-red-100 text-red-500 border border-red-300  w-full flex min-h-[28px] gap-1 items-center px-[6px] py-1 rounded-sm", className)}
        label={
          <div className="flex-center gap-2">
            <MdOutlineDelete />
            <span>Delete</span>
          </div>
        }
        pendingLabel="Deleting..."
      />
    </form>
  );
};
