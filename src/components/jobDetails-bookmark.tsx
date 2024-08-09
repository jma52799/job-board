"use client";

import { useState, useEffect } from "react";
import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";
import AuthDialog from "./auth-dialog";
import { useSession } from "next-auth/react";

export default function JobDetailsBookmark({ jobId }: { jobId: Job['id'] | any }) {
    const { bookmarkedIds,isAuthenticated, handleToggleBookmarkedIds, showAuthDialog, isLogin, closeAuthDialog, toggleDialog } = useBookmarkContext();

    return (
        <div>
            <button
                className="flex items-center gap-x-1 text-black px-3 py-2 rounded border border-solid border-black hover:cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleToggleBookmarkedIds(jobId);
                }}
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
