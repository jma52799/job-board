import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bycrypt from "bcryptjs";


export const config = {
    pages: {
        signIn: "/login",
    },
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
    callbacks: {
        //logic for whether to allow user through (logged in) or not (not logged in)
        authorized: ({ auth, request }) => {
            const isLoggedIn = Boolean(auth?.user);
            const isTryingToAccessAccount = request.nextUrl.pathname.includes('/account');
            const isTryingToAccessApp = request.nextUrl.pathname.includes('/');

            if (!isLoggedIn && isTryingToAccessAccount) {
                return false;
            } 
            if (isLoggedIn && isTryingToAccessAccount) {
                return true;
            } 
            if (isLoggedIn && !isTryingToAccessAccount) {
                return Response.redirect(new URL("/account", request.nextUrl));
            }
            if (!isLoggedIn && !isTryingToAccessAccount) {
                return true;
            } 

            return false;
        },
        jwt: ({ token, user }) => {
            if (user) {
                token.userId = user.id;
            }

            return token;
        },
        session: ({ session, token }) => {
            if (session.user) {
                session.user.id = token.userId;
            }

            return session;
        }
    }
} satisfies NextAuthConfig;

export const { auth, signIn, signOut, handlers: {GET, POST}} = NextAuth(config);


