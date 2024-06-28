import { Job } from "@prisma/client";
import { createContext, useCallback, useMemo, useState } from "react";

type TBookmarkContext = {
    bookmarkedId: Job['id'][] | null;
    handleToggleBookmarkedId: (id: Job['id']) => void;
}

export const BookmarkContext = createContext<TBookmarkContext | null>(null);

export default function BookmarkContextProvider({ children }: { children: React.ReactNode }) { 
    //state
    const [bookmarkedId, setBookmarkedId] = useState<Job['id'][] | null>(null);

    //event handler
    const handleToggleBookmarkedId = (id: Job['id']) => {
        bookmarkedId?.includes(id)
        ? setBookmarkedId(bookmarkedId.filter((item) => item !== id))
        : setBookmarkedId([...(bookmarkedId || []), id])
    };

    return (
        <BookmarkContext.Provider
            value={{
                bookmarkedId,
                handleToggleBookmarkedId,
            }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}