import { useContext } from "react";
import { SearchContext } from "@/contexts/search-context-provider";
import { JobsContext } from "@/contexts/jobs-context-provider";
import { BookmarkContext } from "@/contexts/bookmark-context-provider";
import { UserInfoContext } from "@/contexts/userInfo-context-provider";
import { useQuery } from "@tanstack/react-query";
import prisma from "@/lib/db";
import { Job } from "@prisma/client";

export function useSearchContext() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error(
            "useSearchContext must be used within a SearchContextProvider"
        )
    }

    return context;
}

export function useJobsContext() {
    const context = useContext(JobsContext);

    if (!context) {
        throw new Error(
            "useJobsContext must be used within a JobsContextProvider"
        )
    }

    return context;
}

export function useBookmarkContext() {
    const context = useContext(BookmarkContext);

    if (!context) {
        throw new Error(
            "useBookmarkContext must be used within a BookmarkContextProvider"
        )
    }

    return context;
}

export function useUserInfoContext() {
    const context = useContext(UserInfoContext);

    if (!context) {
        throw new Error(
            "useUserInfoContext must be used within a UserInfoContextProvider"
        )
    }

    return context;
}

//-----------Get Job Items-----------


//-----------Get Bookmark Items-----------
export async function useBookmarkedJobItems() { 
    const bookmarks = await prisma.bookmarked.findMany();
    return bookmarks;
}