"use client"

import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";

export default function SavedPageBookmarkIcon({ jobId }: { jobId: Job['id'] | any }) {
    const { deleteBookmarkedId, bookmarkedIds } = useBookmarkContext();

    return (
        <div>
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deleteBookmarkedId(jobId);
                }}
            >
                <BookmarkFilledIcon 
                    className={bookmarkedIds?.includes(jobId) ? "filled" : ""}
                />
            </button>
        </div>
    )
}