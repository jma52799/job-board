"use server";

import { UserExperienceEssentials } from "@/lib/types";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/lib/auth";
import bycrypt from "bcrypt";
import { redirect } from "next/navigation";
import { Job, Prisma } from "@prisma/client";

// --- user profile actions ---
export async function saveExperience(newExperience: UserExperienceEssentials) {
    const existingExperience = await prisma.userFile.findFirst();

    if (existingExperience) {
        await prisma.userFile.update({
            where: { id: existingExperience.id },
            data: newExperience,
        });
    } else {
        await prisma.userFile.create({
            data: newExperience,
        });
    }

    revalidatePath("/account", "page");
}

// --- user auth actions ---
export async function logIn(formData: FormData) {
    //sign in a user after logging in
    //This runs the 'Credentials authorize' function in auth.ts
    await signIn('credentials', formData);
}

export async function logOut() {
    await signOut({redirectTo: '/'});
}

export async function signUp(formData: FormData) {
    try {
        const hashedPassword = await bycrypt.hash(formData.get('password') as string, 10);

        await prisma.user.create({
            data: {
                email: formData.get('email') as string,
                hashedPassword,
            }
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
              return {
                message: "Email already exists.",
              };
            }
        }
      
        return {
            message: "Could not create user.",
        };
    }

    // Sign in new user after creating their account
    await signIn("credentials", formData);
}

export async function destroyAccount() {
    //await prisma.user.deleteMany();
}

// --- bookmark actions ---
/*
export async function toggleBookmarkedIds(bookmarkedIds: Job['id'][] | null, id: Job['id']) {
    if (bookmarkedIds?.includes(id)) {
        await prisma.bookmarked.delete({
            where: {
                id,
            }
        });
    } else {
        await prisma.bookmarked.create({
            data: {
                jobId: id
            }
        });
    }
}
*/

