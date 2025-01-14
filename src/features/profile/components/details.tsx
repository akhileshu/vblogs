import { cn } from "@/lib/utils";
import { getUserByIdHandler } from "@/server-actions/prisma-handlers/user";
import { extractResultData } from "@/server-actions/utils/response";
import { Avatar } from "@/shared/components/avatar";
import { LoaderErrorWrapper } from "@/shared/components/Loader";
import { getServerSessionUser } from "@/shared/lib/auth/getServerSessionUtils";
import React from "react";

type DetailsProps = {
  className?: string;
};

const Details: React.FC<DetailsProps> = async ({ className }) => {
  const user = await getServerSessionUser();
  if (!user) {
    return <p>Please Login</p>;
  }
  const result = await getUserByIdHandler(user.id);
  const { data } = extractResultData(result);
  //todo : improve , below if we dont have data , we are handling error
  if(!data) return <LoaderErrorWrapper result={result}><></></LoaderErrorWrapper>
  const {email,name,image,role}=data
  return (
    <LoaderErrorWrapper result={result}>
      <div className={cn("flex-center flex-col", className)}>
        <Avatar className="size-16 border-none" url={image} />
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-400">{role.toLowerCase()}</p>
        <p className="text-sm text-gray-400">{email}</p>
      </div>
    </LoaderErrorWrapper>
  );
};

export default Details;
