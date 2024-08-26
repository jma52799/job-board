"use client";

import { Job } from "@prisma/client";
import { createContext, useEffect, useState } from "react";
import { addBookmark, deleteBookmark, fetchAuthenticatedUser, fetchBookmarkedJobs } from "@/actions/actions";

type TBookmarkContext = {
    bookmarkedIds: Job['id'][] | null;
    id: string | null;
    resetBookmarks: () => void;
    handleToggleBookmarkedIds: (id: Job['id'], userId: string | null) => Promise<void>;
};

export const BookmarkContext = createContext<TBookmarkContext | null>(null);

export default function BookmarkContextProvider({ children }: { children: React.ReactNode }) {
    const [bookmarkedIds, setBookmarkedIds] = useState<Job['id'][]>([]);
    const [id, setId] = useState<string | null>(null);


    // Fetch bookmark on initial render if user already logged in
    /*useEffect(() => {
        const fetchUserAndBookmarks = async () => {
            const session = await fetchAuthenticatedUser();
            if (session) {
                setId(session.user.id);
                const jobs = await fetchBookmarkedJobs(session.user.id);
                setBookmarkedIds(jobs.map(job => job.id));
            } else {
                setId(null);
                setBookmarkedIds([]); // Clear bookmarks if not logged in
            }
        };

        fetchUserAndBookmarks();
    }, []); */

    //event handler
    const resetBookmarks = () => {
        setBookmarkedIds([]);
    };

    const handleToggleBookmarkedIds = async (id: Job['id'], userId: string | null) => {
        if (!userId) return;

        if (bookmarkedIds?.includes(id)) {
            setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
            await deleteBookmark(id, userId);
            console.log("deleted bookmark");
        } else {
            setBookmarkedIds([...(bookmarkedIds || []), id]);
            await addBookmark(id, userId);
        }
    };

    return (
        <BookmarkContext.Provider
            value={{
                bookmarkedIds,
                id,
                resetBookmarks,
                handleToggleBookmarkedIds,
            }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}
