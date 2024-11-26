import { UserRole } from "@prisma/client";

export const getUserRoleByEmailId = (emailId: string): UserRole => {
  if (emailId === AUTH.ADMIN_EMIAL_ID) return UserRole.ADMIN;
  if (emailId === AUTH.AUTHOR_EMIAL_ID) return UserRole.AUTHOR;
  // return role if already exists in db
  return UserRole.LEARNER;
};

const AUTH = {
  ADMIN_EMIAL_ID: "admin@gmail.com",
  AUTHOR_EMIAL_ID: "umapati4381@gmail.com",
} as const;
