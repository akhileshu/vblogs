import { getUserRoleByEmailId } from "@/shared/lib/auth/getUserRoleByEmailId";
import prisma from "@/shared/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        console.log({ profile });
        return {
          role: profile.role ?? getUserRoleByEmailId(profile.email),
          id: profile.sub,
          ...profile,
        };
      },
      authorization: {
        params: {
          prompt: "select_account", // or "consent"
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //callbacks called after signin

    async signIn({ profile, user }) {
      
      const { email, name, role, picture } = user;
      if (
        !email ||
        !name ||
        !role ||
        !picture ||
        !profile?.email ||
        !profile?.name
      )
        return false;
      try {
        const userprofile = await prisma.user.upsert({
          where: { email },
          update: { name, role },
          create: { email, name, role, image: picture },
        });
        if (!userprofile.id) {
          throw new Error("Failed to upsert user");
        }
        user.id = userprofile.id;
        return true;
      } catch (error) {
        console.log(error)
        return false;
      }
    },
    async session({ token, session }) {
      
      /* 
      saw a bug where token.id was giving a id that didn't exist in the database
      fix: check if token.id exists in the database - in jwt callback
       */
      if (token) {
        const { id, role, email, name, picture } = token;
        session.user.id = id;
        session.user.name = name;
        session.user.email = email;
        session.user.role = role;
        session.user.image = picture;
      }
      return session;
    },
    async jwt({ token, user}) {
      // very wierd behaviour , it wont work if use any field before making sure it must exist , have this consistent structure
      
      if (user && user.id && user.role && user.picture) {
        token.id = user.id;
        token.role = user.role;
        token.picture = user.picture;
      } 
      // below code might be causing session clerning after server restart
      /* else if (token.id) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id },
        });
        if (dbUser) {
          token.role = dbUser.role;
          token.picture = dbUser.image;
        } else throw new Error("User not found - please sign in again");
      } */

      return token;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
