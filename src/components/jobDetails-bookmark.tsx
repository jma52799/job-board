"use client";

import { useState } from "react";
import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";
import AuthDialog from "./auth-dialog";

export default function JobDetailsBookmark({ jobId }: { jobId: Job['id'] | any }) {
    const { bookmarkedIds, handleToggleBookmarkedIds } = useBookmarkContext();
    const [showAuthDialog, setShowAuthDialog] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const loggedIn = false; // This should be replaced with actual authentication logic

    const handleClick = () => {
        if (!loggedIn) {
            setShowAuthDialog(true);
            setIsLogin(false); // Show sign-up dialog by default
            return;
        }
        handleToggleBookmarkedIds(jobId);
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
                    className={bookmarkedIds?.includes(jobId) ? "filled" : ""}
                />
                Save
            </button>
            {showAuthDialog && 
                <AuthDialog closeDialog={closeAuthDialog} isLogin={isLogin} toggleDialog={toggleDialog} />
            }
        </div>
    );
}
