"use server";

import { UserExperienceEssentials } from "@/lib/types";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { signIn } from "@/lib/auth";


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
    const authData = Object.fromEntries(formData.entries())

    //sign in a user after logging in
    await signIn('credentials', authData);

    console.log(authData);
}
