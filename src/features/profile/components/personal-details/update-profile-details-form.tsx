"use client";
import { cn } from "@/lib/utils";
import { updateUserHandler } from "@/server-actions/prisma-handlers/user";
import { SubmitButton } from "@/shared/components/formSubmitButton";
import { AppCard, AppInput } from "@/shared/components/standard-components";
import { useFormHandler } from "@/shared/hooks/useFormHandler";
import { useSession } from "next-auth/react";
import { useState } from "react";
import UploadAvatar from "./UploadAvatar";

type UpdateProfileDetailsFormProps = {
  className?: string;
  closeEditForm: () => void;
};

export const UpdateProfileDetailsForm: React.FC<
  UpdateProfileDetailsFormProps
> = ({ className, closeEditForm }) => {
  const { data: session, update:updateSession } = useSession();
  if (!session?.user || !session.user.name || !session.user.image) {
    throw new Error("please login");
  }
  const [name, setName] = useState(session.user.name);
  const { formAction } = useFormHandler({
    actionHandler: updateUserHandler,
    onSuccess: (data) => {
      if (data && session?.user) {
        const {name,image}=data
        updateSession({ ...session.user, name, image });
      }
      closeEditForm();
    },
  });

  return (
    <AppCard
      className={cn("border-none", className)}
      title="Update profile details"
    >
      <form action={formAction}>
        <UploadAvatar currentUrl={session.user.image} />
        <div className="flex gap-2 items-center">
          <label htmlFor="name">name</label>
          <AppInput
            type="text"
            placeholder={"update your name"}
            value={name as string}
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-2">
          <SubmitButton />
          <button onClick={() => closeEditForm()}>Cancel</button>
        </div>
      </form>
    </AppCard>
  );
};
