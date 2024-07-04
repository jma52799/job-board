import NextAuth, { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bycrypt from "bcrypt";


export const config  = {
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            
        })
    ],
    callbacks: {
        //logic for whether to allow user through (logged in) or not (not logged in)
        authorized: ({ request }) => {
            const isTryingToAccessAccount = request.nextUrl.pathname.include('/account');
            
            if (!isTryingToAccessAccount) {
                return true;
            } else {
                return false;
            }
        }
    }
} satisfies NextAuthConfig;

export const { auth, signIn, signOut } = NextAuth(config);