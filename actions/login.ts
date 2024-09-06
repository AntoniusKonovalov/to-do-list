"use server"

import * as z from "zod";
import { LoginSchema } from "@/schemas";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const login = async(values: z.infer<typeof LoginSchema>) => {
     await delay(1000) 
     
     const validateFields = LoginSchema.safeParse(values);

     if(!validateFields.success) {
          return {error: "Invalid fields!"};
     }

     return {success: "Email sent!"};
}