"use client";

import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";
import { fetchAuthenticatedUser } from "@/actions/actions";

export default function SavedPageBookmarkIcon({ jobId }: { jobId: Job['id'] }) {
    const { bookmarkedIds, handleToggleBookmarkedIds, id } = useBookmarkContext();

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        //TODO: Figure out a way to use the session props to check if user is logged in in client components to prevent having to fetch the session every time
        const session = await fetchAuthenticatedUser();
        if (session) {
            await handleToggleBookmarkedIds(jobId, session.user.id);
        } else {
            console.log("User not authenticated");
        }
    };

    return (
        <div>
            <button onClick={handleClick}>
                <BookmarkFilledIcon 
                    className={`${bookmarkedIds?.includes(jobId) ? "fill-current text-black" : "text-transparent stroke-black"}`}
                />
            </button>
        </div>
    );
}
