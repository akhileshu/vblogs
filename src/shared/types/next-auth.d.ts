import { UserRole } from "@prisma/client";
import "next-auth/jwt";
type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
    id: UserId;
  }
}

declare module "next-auth" {
  interface User {
    role: UserRole;
    picture:string;
  }
  interface Session {
    user: User & {
      id: UserId;
    };
  }
}
