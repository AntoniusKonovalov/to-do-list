// next-auth.d.ts
import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

export type ExtendedUser = DefaultSession["user"] & {
  role?: UserRole;
  isTwoFactorEnabled?: boolean;
};

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role?: "USER" | "ADMIN"; // Add role to session user
      image?: string;
      isTwoFactorEnabled?: boolean;
    };
  }

  interface User {
    id?: string;
    role?: "USER" | "ADMIN"; // Add role to User type
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "USER" | "ADMIN";  // Add role to JWT type
  }
}


