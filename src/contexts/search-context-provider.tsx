"use client"

import {createContext, useState} from 'react';
import { useDebounce }  from "@uidotdev/usehooks";

type TSearchContext = {
    //debouncedSearchQuery: string;
    searchQuery: string;
    debouncedSearchQuery: string;
    handleChangeSearchQuery: (newValue: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);
export default function SearchContextProvider({children}: {children: React.ReactNode}) {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 250);

    const handleChangeSearchQuery = (newValue: string) => {
        setSearchQuery(newValue);
    };

    return (
        <SearchContext.Provider value={{searchQuery, debouncedSearchQuery, handleChangeSearchQuery}}>
            {children}
        </SearchContext.Provider>
    )
}
