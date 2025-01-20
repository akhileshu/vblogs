import { cn } from "@/lib/utils";
import { getUserByIdHandler } from "@/server-actions/prisma-handlers/user";
import { extractResultData } from "@/server-actions/utils/response";
import { Avatar } from "@/shared/components/avatar";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { getServerSessionUser } from "@/shared/lib/auth/getServerSessionUtils";
import React from "react";
import { FaEdit } from "react-icons/fa";

type ProfileDetailsProps = {
  className?: string;
};

const UserBasicDetails: React.FC<ProfileDetailsProps> = async ({
  className,
}) => {
  const user = await getServerSessionUser();
  if (!user) {
    return <p>Please Login</p>;
  }
  const result = await getUserByIdHandler(user.id);
  const { data } = extractResultData(result);
  //todo : improve , below if we dont have data , we are handling error
  if (!data)
    return (
      <LoaderErrorWrapper result={result}>
        <></>
      </LoaderErrorWrapper>
    );
  const { email, name, image, role } = data;
  return (
    <LoaderErrorWrapper className="relative" result={result}>
      <div className={cn("flex-center flex-col", className)}>
        <Avatar className="size-16 border-none" url={image} />
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-400">{role.toLowerCase()}</p>
        <p className="text-sm text-gray-400">{email}</p>
      </div>
      <FaEdit className="absolute top-5 right-10 size-5 hover:text-gray-500" />
    </LoaderErrorWrapper>
  );
};

export default UserBasicDetails;
