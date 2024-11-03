// next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role?: "USER" | "ADMIN"; // Add role to session user
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


