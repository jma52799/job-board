"use client";

import { Job } from "@prisma/client";
import { createContext, useCallback, useMemo, useState } from "react";
import prisma from "@/lib/db";
import { toggleBookmarkedIds } from "@/lib/bookmark-utils";

type TBookmarkContext = {
    bookmarkedIds: Job['id'][] | null;
    handleToggleBookmarkedIds: (id: Job['id']) => void;
}

export const BookmarkContext = createContext<TBookmarkContext | null>(null);

export default function BookmarkContextProvider({ children }: { children: React.ReactNode }) { 
    //state
    const [bookmarkedIds, setBookmarkedIds] = useState<Job['id'][] | null>(null);


    //event handler
    const handleToggleBookmarkedIds = async (id: Job['id']) => {
        if (bookmarkedIds?.includes(id)) {
            await fetch('/api/bookmarks/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
        } else {
            await fetch('/api/bookmarks/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            setBookmarkedIds([...(bookmarkedIds || []), id]);
        }
    }
    
    return (
        <BookmarkContext.Provider
            value={{
                bookmarkedIds,
                handleToggleBookmarkedIds,
            }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}