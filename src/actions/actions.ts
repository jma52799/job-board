"use server";

import { UserExperienceEssentials } from "@/lib/types";
import prisma from "@/lib/db";
import Prisma from "@prisma/client";
import { revalidatePath } from "next/cache";
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