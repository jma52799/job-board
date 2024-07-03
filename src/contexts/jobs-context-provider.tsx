"use client";

import {createContext, useCallback, useEffect, useState} from 'react';
import { Job } from "@prisma/client";
import {useSearchContext, useSearchQuery} from "@/lib/hooks";
import { SortBy } from '@/lib/types';

type JobsContextProviderProps = {
    children: React.ReactNode;
}

type TJobsContext = {
    jobs: Job[] | undefined;
    isLoading: boolean;
    numberOfJobs: number;
    selectedJob: Job | undefined;
    selectedJobId: string | null;
    sortBy: SortBy[];
    sideSortBy: "relevant" | "recent";
    handleChangeSelectedJobId: (id: Job['id']) => void;
    handleChangeSortBy: (value: SortBy) => void;
    handleChangeSideSortBy: (value: "relevant" | "recent") => void;
}

export const JobsContext = createContext<TJobsContext | null>(null);

export default function JobsContextProvider({
    children
}: JobsContextProviderProps) {
    //state
    const { debouncedSearchQuery } = useSearchContext();
    const { jobs, isLoading } = useSearchQuery(debouncedSearchQuery);
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<SortBy[]>(["relevant"]);
    const [sideSortBy, setSideSortBy] = useState<"relevant" | "recent">("relevant");

    //derived state
    const selectedJob: Job | undefined = jobs?.find((job) => job.id === selectedJobId);
    const numberOfJobs = jobs?.length || 0;

    //event handler
    const handleChangeSelectedJobId = useCallback((id: Job['id']) => {
        setSelectedJobId(id);
    },[]);

    const handleChangeSortBy = useCallback((value: SortBy) => {
        const newSortBy = sortBy.includes(value)
            ? sortBy.filter((item) => item !== value)
            : [...sortBy, value];

        setSortBy(newSortBy);
    }, [sortBy]);

    const handleChangeSideSortBy = useCallback((value: "relevant" | "recent") => {
        setSideSortBy(value);
        handleChangeSortBy(value);
    }, [handleChangeSortBy]);

    return (
        <JobsContext.Provider
            value={{
                jobs: jobs,
                isLoading,
                numberOfJobs,
                selectedJob,
                selectedJobId,
                sortBy,
                sideSortBy,
                handleChangeSelectedJobId,
                handleChangeSortBy,
                handleChangeSideSortBy,
            }}
        >
            {children}
        </JobsContext.Provider>
    )
}
