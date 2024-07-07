"use client";

import { Bookmarked, Job } from "@prisma/client";
import { createContext, useCallback, useMemo, useState, useEffect } from "react";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type TBookmarkContext = {
    bookmarkedIds: Job['id'][] | null;
    //handleToggleBookmarkedIds: (id: Job['id']) => void;
}

export const BookmarkContext = createContext<TBookmarkContext | null>(null);

export default function BookmarkContextProvider({ children }: { children: React.ReactNode }) {
    //state
    const [bookmarkedIds, setBookmarkedIds] = useState<Job['id'][] | null>(null);


    //event handler
    /*
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
    */
    
    return (
        <BookmarkContext.Provider
            value={{
                bookmarkedIds,
                //handleToggleBookmarkedIds,
            }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}


/*
    const [bookmarks, setBookmarks] = useState<Bookmarked[] | null>(null);

    useEffect(() => {
        const fetchBookmarks = async () => {
            const session = await auth();
            if (!session?.user) {
                redirect("/login");
            } else {
                const userBookmarks = await prisma.bookmarked.findMany({
                    where: {
                        userId: session.user.id,
                    }
                });
                setBookmarks(userBookmarks);
            }
        };

        fetchBookmarks();
    }, []);

    const handleToggleBookmarkedIds = async (id: Job['id']) => {
        const session = await auth();
        if (!session?.user) {
            return null;
        }

        const existingBookmark = bookmarks?.find((bookmark) => bookmark.jobId === id);

        if (existingBookmark) {
            await prisma.bookmarked.deleteMany({
                where: {
                    jobId: id,
                    userId: session.user.id,
                }
            });
        } else {
            await prisma.bookmarked.create({
                data: {
                    jobId: id,
                    userId: session.user.id,
                }
            });
        }

        // Fetch the updated bookmarks
        const updatedBookmarks = await prisma.bookmarked.findMany({
            where: {
                userId: session.user.id,
            }
        });
        setBookmarks(updatedBookmarks);
    }
    */

    /*
    How can I modify the bookmark-context-provider to align with the prisma schema? And I want to replace the API calls with 'prisma.<model>.deleteMany' and 'prisma.<model>.findMany' to delete or add bookmark associated to a single user. And if the user hasn't signed in yet, then th

bookmark-context-provider:
"use client";

import { Bookmarked, Job } from "@prisma/client";
import { createContext, useCallback, useMemo, useState, useEffect } from "react";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

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
    */