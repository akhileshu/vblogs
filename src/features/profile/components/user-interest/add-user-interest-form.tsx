"use client";
import { createUserInterestHandler } from "@/server-actions/prisma-handlers/user-interest";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import { useFormHandler } from "@/shared/hooks/useFormHandler";
import { InterestType } from "@prisma/client";

export function AddUserInterestForm({
  ids,
  type,
  onSuccess,
}: {
  ids?: string[];
  type: InterestType;
  onSuccess:()=>void
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initialState = {
    fieldErrors: undefined,
    errorMsg: undefined,
    data: undefined,
    success: false,
  };

  const { formAction, fieldErrors } = useFormHandler({
    actionHandler: createUserInterestHandler,
    successMessage: "interest added",
    onSuccess,
  });

  return (
    <form action={formAction}>
      <input
        hidden
        name="topicIds"
        type="text"
        value={type === "TOPIC" ? JSON.stringify(ids) : undefined}
      />
      <input
        hidden
        name="technologyIds"
        type="text"
        value={type === "TECHNOLOGY" ? JSON.stringify(ids) : undefined}
      />
      <SubmitButton />
      <p className="text-red-500">{fieldErrors?.technologyIds}</p>
      <p className="text-red-500">{fieldErrors?.topicIds}</p>
    </form>
  );
}
