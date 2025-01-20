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
export const getServerSessionUserByRole = async (userRole: UserRole) => {
  const user = await getServerSessionUser();
  if (user && user.role === userRole) return user
};

  const testUser = {
    name: "Akhilesh Upadhyay",
    email: "umapati4381@gmail.com",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocJK-jwfHYJK009YVQqm7FLNqSauaegHYGhN6LzjvaO7GvhFmuSx=s96-c",
    id: "48942f89-e703-4a29-a621-0fc21456211b",
    role: "AUTHOR",
  };

