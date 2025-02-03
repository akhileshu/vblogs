import { getUserByIdHandler } from "@/server-actions/prisma-handlers/user";
import { AppSuspense } from "@/shared/components/Loader";
import { UnauthorizedAccess } from "@/shared/components/unauthrorized-access";
import { getServerSessionUser } from "@/shared/lib/auth/getServerSessionUtils";
import React from "react";
import { ProfileDetails } from "./ProfileDetails";


type ProfileProps = {
  className?: string;
};

const Profile: React.FC<ProfileProps> = async ({ className }) => {
  const user = await getServerSessionUser();
  if (!user) return <UnauthorizedAccess />;

  const result = await getUserByIdHandler(user.id);
  return (
    <AppSuspense message="Loading profile">
      <ProfileDetails className={className} result={result} />
    </AppSuspense>
  );
};

export default Profile;
