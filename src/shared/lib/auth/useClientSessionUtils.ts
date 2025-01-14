import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";

export const useSessionUser = () => {
  const { data: session , status } = useSession();
  if ( !session?.user && status !=="loading")throw new Error("User session not found");
  return session?.user;
};
export const useSessionUserByRole = (userRole: UserRole) => {
  const user = useSessionUser();
  if (user && user.role === userRole) return user;
};

export const useVerifyRole = (userRole: UserRole) => {
  const user = useSessionUser();
  if (user && user.role === userRole) {
    return true;
  }
  return false;
};
