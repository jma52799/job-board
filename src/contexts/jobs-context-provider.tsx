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
    handleChangeSelectedJobId: (id: Job['id']) => void;
    handleChangeSortBy: (value: SortBy) => void;
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

    //derived state
    const selectedJob = jobs?.find((job) => job.id === selectedJobId);
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

    return (
        <JobsContext.Provider
            value={{
                jobs: jobs,
                isLoading,
                numberOfJobs,
                selectedJob,
                selectedJobId,
                handleChangeSelectedJobId,
                handleChangeSortBy,
            }}
        >
            {children}
        </JobsContext.Provider>
    )
}
