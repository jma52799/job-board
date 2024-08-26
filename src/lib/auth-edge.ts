import { NextAuthConfig } from "next-auth";

export const nextAuthEdgeConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        /*
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
        },*/
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
    },
    providers: [],
} satisfies NextAuthConfig;