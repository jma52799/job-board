import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bycrypt from "bcryptjs";
import { nextAuthEdgeConfig } from "./auth-edge";


export const config = {
    ...nextAuthEdgeConfig,
    providers: [
        Credentials({
            //authorize user based on the credentials they typed in (email & password)
            async authorize(credentials) {
                //runs on login
                const { email, password } = credentials as { email: string, password: string };
                const user = await prisma.user.findUnique({ where: { email } });
                if (!user) {
                    console.log("No user with that email");
                    return null;
                }

                const isCorrect = await bycrypt.compare(password, user.hashedPassword);
                if (!isCorrect) {
                    console.log("Incorrect password");
                    return null;
                }
                

                return user;
            }
        })
    ],

} satisfies NextAuthConfig;

export const { auth, signIn, signOut, handlers: {GET, POST}} = NextAuth(config);


