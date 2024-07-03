"use client"

import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarkContext } from "@/lib/hooks";
import AuthDialog from "./auth-dialog";
import { useState } from "react";

export default function JobDetailsBookmark({ jobId }: { jobId: Job['id'] | any }) {
    const { bookmarkedIds, handleToggleBookmarkedIds } = useBookmarkContext();
    const [showAuthDialog, setShowAuthDialog] = useState(false);

    const loggedIn = false;

    const handleOnClick = () => {
        if (!loggedIn) {
            setShowAuthDialog(true);
            return;
        }
        handleToggleBookmarkedIds(jobId);
    };

    const closeAuthDialog = () => {
        setShowAuthDialog(false);
    };

    return (
        <>
            <button 
                className="flex items-center gap-x-1 text-black px-3 rounded border border-solid border-black hover:cursor-pointer"
                onClick={() => {handleOnClick()}}
            >
                <BookmarkFilledIcon 
                    className={bookmarkedIds?.includes(jobId) ? "filled" : ""}
                />
                Save
            </button>
            {showAuthDialog && <AuthDialog onCloseDialog={closeAuthDialog}/>}
        </>
    )
}