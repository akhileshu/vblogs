import { getUserRoleByEmailId } from "@/lib/auth";
import prisma from "@/lib/prisma";
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

    async signIn({ account, profile, user }) {
      //debugger;
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
        user.id = userprofile.id;
        return true;
      } catch (error) {
        return false;
      }
    },
    async session({ token, session }) {
      //debugger;
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
    async jwt({ token, user, profile }) {
      // very wierd behaviour , it wont work if use any field before making sure it must exist , have this consistent structure
      //debugger;
      if (user && user.id && user.role && user.picture) {
        token.id = user.id;
        token.role = user.role;
        token.picture = user.picture;
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
