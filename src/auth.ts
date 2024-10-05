import "next-auth/jwt";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

import { env, isDevelopment } from "@/constants/env";
import { createUser, getUserByEmail, getUserById } from "@/lib/actions/user";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  debug: isDevelopment,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.image,
          role: "USER",
        };
      },
    }),
    // GoogleProvider({
    //   clientId: env.GOOGLE_CLIENT_ID,
    //   clientSecret: env.GOOGLE_CLIENT_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: env.FACEBOOK_CLIENT_ID,
    //   clientSecret: env.FACEBOOK_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await getUserByEmail(credentials.email);
        if (!user || !user.password) return null;

        const isPasswordValid = await compare(credentials.password, user.password);
        return isPasswordValid ? user : null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: SessionParams) {
      let user = await getUserById(token.sub as string);

      if (!user) {
        user = await createUser({
          email: token.email,
          password: null,
        });
      }

      return {
        ...session,
        user,
      };
    },
  },
};

const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

export { auth, handlers, signIn, signOut };

declare module "next-auth/jwt" {
  interface JWT {
    sub: string;
    email: string;
    role: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
