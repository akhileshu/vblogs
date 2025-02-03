"use client";

import { cn } from "@/lib/utils";
import { extractResultData } from "@/server-actions/utils/response";
import { Avatar } from "@/shared/components/avatar";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { UpdateProfileDetailsForm } from "./update-profile-details-form";
import { getUserByIdHandler } from "@/server-actions/prisma-handlers/user";

export const ProfileDetails = ({
  className,
  result,
}: {
  className?: string;
  result: Awaited<ReturnType<typeof getUserByIdHandler>>;
}) => {
  const { data } = extractResultData(result);
  const [isEdit, setIsEdit] = useState(false);
  const { data: session } = useSession();
  if (!data) return <p>failed to load profile</p>;
  function closeEditForm() {
    setIsEdit(false);
  }

  //use session insted of userdata fetched from db
  if (!session || !session.user || !session.user.image)
    return <p>failed to load session</p>;
  const { image, email, role, name } = session.user;
  return (
    <LoaderErrorWrapper className={cn("relative" , className)} result={result}>
      {!isEdit ? (
        <div>
          <div className={cn("flex-center flex-col", className)}>
            <Avatar className="size-16 border-none" url={image} />
            <p className="font-bold text-lg">{name}</p>
            <p className="text-sm text-gray-400">{role?.toLowerCase()}</p>
            <p className="text-sm text-gray-400">{email}</p>
          </div>
          <FaEdit
            onClick={() => setIsEdit(true)}
            className="absolute top-5 right-10 size-5 hover:text-gray-500"
          />
        </div>
      ) : (
        <UpdateProfileDetailsForm className="" closeEditForm={closeEditForm} />
      )}
    </LoaderErrorWrapper>
  );
};
