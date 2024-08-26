"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/lib/auth";
import bycrypt from "bcrypt";
import { Job, Prisma } from "@prisma/client";
import { auth } from "@/lib/auth";
import { AuthError } from "next-auth";

// --- user profile actions ---
export async function saveExperience(experience: string) {
    try {
        const session = await auth();
        if (!session) {
            return;
        }

        const userId = session.user.id;

        const existingExperience = await prisma.userFile.findFirst({
            where: { userId },
        });

        if (existingExperience) {
            await prisma.userFile.update({
                where: { id: existingExperience.id },
                data: { experience },
            });
        } else {
            await prisma.userFile.create({
                data: {
                    experience,
                    userId: userId, 
                },
            });
        }
    } catch (error: any) {
        throw new Error(error.message);
    }

    revalidatePath("/account", "page");
}



export async function fetchUserExperience(userId: string): Promise<string | null> {
    const userFile = await prisma.userFile.findUnique({
      where: { userId },
      select: { experience: true },
    });
  
    return userFile?.experience || null;
  }
  

// --- user auth actions ---
export async function logIn(prevState: unknown, formData: unknown) { //was FormData
    if (!(formData instanceof FormData)) {
        return {
            message: "Invalid form data",
        }
    }
    //sign in a user after logging in
    //This runs the 'Credentials authorize' function in auth.ts
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch(error.type) {
                case "CredentialsSignin":
                    return {
                        message: "Invalid credentials"
                    }
                default:
                    return {
                        message: "Could not sign in"
                    }
            }
        }
        throw error;
    }
}

export async function logOut() {
    await signOut({redirectTo: '/'});
}

export async function signUp(prevState: unknown, formData: unknown) {
    if (!(formData instanceof FormData)) {
        return {
          message: "Invalid form data.",
        };
    }

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
    try {
        const session = await auth();
        if (!session) {
            return;
        }
        const userId = session.user.id;

        await prisma.user.delete({
            where: { id: userId },
        })
    } catch (error: any) {
        throw new Error(error.message);
    } finally {
        await signOut({redirectTo: '/'});
    } 
}

// --- bookmark actions ---
export async function addBookmark(jobId: Job['id'], userId: string) {
    await prisma.bookmarked.create({
        data: {
            jobId,
            userId,
        },
    });

    revalidatePath("/saved", "page");
}

export async function deleteBookmark(jobId: Job['id'], userId: string) {
    await prisma.bookmarked.deleteMany({
        where: {
            jobId,
            userId,
        },
    });

    revalidatePath("/saved", "page");
}

export async function fetchBookmarkedJobs(userId: string): Promise<Job[]> {
    const bookmarks = await prisma.bookmarked.findMany({
        where: {
            userId,
        },
        include: {
            job: true,
        },
    });

    // Map to extract the full Job objects from the bookmarks
    return bookmarks.map(bookmark => bookmark.job);
}

export async function fetchAuthenticatedUser() {
    const session = await auth();
    return session;
}

/* fetch jobs actions */
export async function getJobs(searchQuery = 'Engineer', page = 1, sortBy: "relevant" | "recent") {
    const whereClause = searchQuery ? {
        OR: [
            { title: { contains: searchQuery, mode: Prisma.QueryMode.insensitive } },
            { company: { contains: searchQuery, mode: Prisma.QueryMode.insensitive } },
            { description: { contains: searchQuery, mode: Prisma.QueryMode.insensitive } },
            { skills: { has: searchQuery } }
        ]
    } : {};

    // Default order by created date (when sortBy equals 'relevant' but no search query is provided)
    let orderByClause: any = { };

    // Sort by relevance if 'relevant' is the sortBy value and ONLY IF a search query is provided
    if (searchQuery && sortBy === "relevant") {
        orderByClause = {
            _relevance: {
                fields: ["title", "description"],
                search: searchQuery,
                sort: "desc",
            }
        }
    }

    if (sortBy === "recent") {
        orderByClause = {
            daysAgo: "asc",
        }
    }

    const jobs = await prisma.job.findMany({
        where: whereClause,
        orderBy: orderByClause,
        take: 7,
        skip: (page - 1) * 7,
    });

    const totalCount = await prisma.job.count({ where: whereClause });

    return {
        jobs,
        totalCount,
    }
}