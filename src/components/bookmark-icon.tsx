"use client"

import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";

export default function BookmarkIcon({ jobId }: { jobId: Job['id'] }) {
    const { bookmarkedId, handleToggleBookmarkedId } = useBookmarkContext();

    return (
        <button 
            onClick={(e) => {
                handleToggleBookmarkedId(jobId);
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <BookmarkFilledIcon 
                className={bookmarkedId?.includes(jobId) ? "filled" : ""}
            />
        </button>
    )
}