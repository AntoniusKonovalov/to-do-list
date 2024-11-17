"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  await delay(1000);

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("Registering user with email: ", values.email);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  console.log("Verification token created:", verificationToken);  

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  

  return { success: "Confirmation email sent!" };
};
