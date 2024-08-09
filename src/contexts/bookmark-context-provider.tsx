"use client";

import { Bookmarked, Job } from "@prisma/client";
import { createContext, useCallback, useMemo, useState, useEffect } from "react";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { addBookmark, deleteBookmark, fetchAuthenticatedUser } from "@/actions/actions";

type TBookmarkContext = {
    bookmarkedIds: Job['id'][] | null;
    deleteBookmarkedId: (id: Job['id']) => Promise<void>;
    handleToggleBookmarkedIds: (id: Job['id']) => Promise<boolean>;
    isAuthenticated: boolean;
    showAuthDialog: boolean;
    isLogin: boolean;
    closeAuthDialog: () => void;
    toggleDialog: () => void;
}

export const BookmarkContext = createContext<TBookmarkContext | null>(null);

export default function BookmarkContextProvider({ children }: { children: React.ReactNode }) {
    //state
    const [bookmarkedIds, setBookmarkedIds] = useState<Job['id'][] | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [showAuthDialog, setShowAuthDialog] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    //helper function
    const fetchUser = async () => {
        const session = await fetchAuthenticatedUser();
        if (session) {
            setUserId(session.user.id);    
            //setIsAuthenticated(true);   
            setShowAuthDialog(false); // Close dialog when user is authenticated
            return true;
        } else {
            //setIsAuthenticated(false);
            setShowAuthDialog(true); // Open dialog when user is not authenticated
            setIsLogin(false); // Show sign-up dialog by default
            return false;
        }
    }

    const closeAuthDialog = () => {
        setShowAuthDialog(false);
    };

    const toggleDialog = () => {
        setIsLogin(!isLogin);
    };

    const deleteBookmarkedId = useCallback(async (id: Job['id']): Promise<void> => {
        await fetchUser();
        await deleteBookmark(id, userId!);
    }, [userId]);
    
    //event handler
    const handleToggleBookmarkedIds = async (id: Job['id']): Promise<boolean> => {
        const success = await fetchUser();

        if (!success) {
            return false;
        }

        if (bookmarkedIds?.includes(id)) {
            setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
            await deleteBookmark(id, userId!);
        } else {
            setBookmarkedIds([...(bookmarkedIds || []), id]);
            await addBookmark(id, userId!);
        }

        return true;
    }
    
    return (
        <BookmarkContext.Provider
            value={{
                bookmarkedIds,
                deleteBookmarkedId,
                handleToggleBookmarkedIds,
                isAuthenticated,
                showAuthDialog,
                isLogin,
                closeAuthDialog,
                toggleDialog
            }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}


