import "server-only";

import { redirect } from "next/navigation";
import { auth } from "./auth-no-edge";
import { Bookmarked, User } from "@prisma/client";
import prisma from "./db";



export async function checkAuth() {
    const session = await auth();
    if (!session?.user) {
      redirect("/login");
    }
  
    return session;
}