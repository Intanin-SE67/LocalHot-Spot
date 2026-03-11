import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
      provider: "sqlite", 
    }),
    emailAndPassword: {
      enabled: true,
      autoSignIn: false
    },
    
    session: {
      expiresIn: 60 * 60 ,
      cookieOptions: {
        maxAge: undefined
      }
    }
});
