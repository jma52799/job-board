import prisma from "./db";
import { Job } from "@prisma/client";
/*
export async function deleteBookmark(id: Job['id']) {
    await prisma.bookmarked.delete({
        where: {
            id,
        }
    });
}

export async function createBookmark(id: Job['id']) {
    await prisma.bookmarked.create({
        data: {
            jobId: id,
        }
    })
}
    */
export async function toggleBookmarkedIds(bookmarkedIds: Job['id'][] | null, id: Job['id']): Promise<Job['id'][]> {
    if (bookmarkedIds?.includes(id)) {
        await prisma.bookmarked.delete({
            where: {
                id,
            },
        });
        return bookmarkedIds.filter((item) => item !== id);
    } else {
        await prisma.bookmarked.create({
            data: {
                jobId: id,
            },
        });
        return [...(bookmarkedIds || []), id];
    }
}