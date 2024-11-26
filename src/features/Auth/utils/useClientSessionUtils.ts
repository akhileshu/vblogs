import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";

export const useSessionUser = () => {
  const { data: session } = useSession();
  return session?.user;
};

export const useVerifyRole = (userRole: UserRole) => {
  const user = useSessionUser();
  if (user && user.role === userRole) {
    return true;
  }
  return false;
};
