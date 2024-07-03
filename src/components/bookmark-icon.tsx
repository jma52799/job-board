"use client"

import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";

export default function BookmarkIcon({ jobId }: { jobId: Job['id'] | any }) {
    const { bookmarkedIds, handleToggleBookmarkedIds } = useBookmarkContext();

    return (

            <button 
                onClick={(e) => {
                    handleToggleBookmarkedIds(jobId);
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <BookmarkFilledIcon 
                    className={bookmarkedIds?.includes(jobId) ? "filled" : ""}
                />
            </button>

    )
}