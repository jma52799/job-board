"use client"

import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";
import { useState } from "react";
import AuthDialog from "./auth-dialog";

export default function BookmarkIcon({ jobId }: { jobId: Job['id'] | any }) {
    const { bookmarkedIds, handleToggleBookmarkedIds, showAuthDialog, isLogin, closeAuthDialog, toggleDialog } = useBookmarkContext();

    return (
        <div>
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleToggleBookmarkedIds(jobId);
                }}
            >
                <BookmarkFilledIcon 
                    className={bookmarkedIds?.includes(jobId) ? "filled" : ""}
                />
            </button>
            {showAuthDialog && 
                <AuthDialog closeDialog={closeAuthDialog} isLogin={isLogin} toggleDialog={toggleDialog} />
            }
        </div>
    )
}