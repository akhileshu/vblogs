import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserRole } from "@prisma/client";

export const getServerSessionUser = async () => {
    // if not authenticated , will return undefined
  const session = await getServerSession(authOptions);
  return session?.user; // Returns session or null
};

export const verifyRoleOnServer = async (userRole:UserRole) => {
    const user = await getServerSessionUser();
    if (user && user.role === userRole) {
      return true;
    }
    return false;
  };


