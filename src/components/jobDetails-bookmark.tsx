"use client";

import { useState, useEffect } from "react";
import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";
import AuthDialog from "./auth-dialog";
import { fetchAuthenticatedUser } from "@/actions/actions";

export default function JobDetailsBookmark({ jobId }: { jobId: Job['id'] }) {
    const { bookmarkedIds, handleToggleBookmarkedIds } = useBookmarkContext();
    const [showAuthDialog, setShowAuthDialog] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);

    const fetchUser = async () => {
        const session = await fetchAuthenticatedUser();
        if (session) {
            setLoggedIn(true);
            setUserId(session.user.id);
            setShowAuthDialog(false);
        } else {
            setLoggedIn(false);
            setUserId(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleClick = async () => {
        if (!loggedIn) {
            setShowAuthDialog(true);
            setIsLogin(false); // Show sign-up dialog by default
        } else {
            await handleToggleBookmarkedIds(jobId, userId);
        }
    };

    const closeAuthDialog = () => {
        setShowAuthDialog(false);
    };

    const toggleDialog = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <button
                className="flex items-center gap-x-1 text-black px-3 py-2 rounded border border-solid border-black hover:cursor-pointer"
                onClick={handleClick}
            >
                <BookmarkFilledIcon
                    className={`${bookmarkedIds?.includes(jobId) ? "fill-current text-black" : "text-transparent stroke-black"}`}
                />
                Save
            </button>
            {showAuthDialog && 
                <AuthDialog closeDialog={closeAuthDialog} isLogin={isLogin} toggleDialog={toggleDialog} />
            }
        </div>
    );
}
