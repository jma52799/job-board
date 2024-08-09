"use client";

import {createContext, useCallback, useEffect, useState} from 'react';
import { Job } from "@prisma/client";
import {useSearchContext} from "@/lib/hooks";
import { SortBy } from '@/lib/types';
import { getJobs } from '@/actions/actions';

type JobsContextProviderProps = {
    children: React.ReactNode;
}

type TJobsContext = {
    page: number;
    jobs: Job[] | undefined;
    isLoading: boolean;
    totalCount: number;
    selectedJob: Job | undefined;
    selectedJobId: string | null;
    sideSortBy: "relevant" | "recent";
    fetchJobs: () => Promise<void>;
    handleChangePage: (newPage: number) => void;
    handleChangeSelectedJobId: (id: Job['id']) => void;
    handleChangeSideSortBy: (value: "relevant" | "recent") => void;
}

export const JobsContext = createContext<TJobsContext | null>(null);

export default function JobsContextProvider({
    children
}: JobsContextProviderProps) {
    //state
    const { searchQuery } = useSearchContext();

    const [jobs, setJobs] = useState([] as Job[]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
    //const [sortBy, setSortBy] = useState<SortBy[]>(["relevant"]);
    const [sideSortBy, setSideSortBy] = useState<"relevant" | "recent">("relevant");

    //derived state
    const selectedJob: Job | undefined = jobs?.find((job) => job.id === selectedJobId);
    //const numberOfJobs = jobs?.length || 0;

    //event handler
    const fetchJobs = useCallback(async () => {
        setIsLoading(true);
        try {
            const { jobs, totalCount } = await getJobs(searchQuery, page, sideSortBy);
            setJobs(jobs);
            setTotalCount(totalCount);
        } catch (error) {
            console.error('Failed to fetch jobs', error);
        } finally {
            setIsLoading(false);
        }

        fetchJobs();
    }, [searchQuery, page, sideSortBy]);

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    }

    const handleChangeSelectedJobId = useCallback((id: Job['id']) => {
        setSelectedJobId(id);
    },[]);

    /*
    const handleChangeSortBy = useCallback((value: SortBy) => {
        const newSortBy = sortBy.includes(value)
            ? sortBy.filter((item) => item !== value)
            : [...sortBy, value];

        setSortBy(newSortBy);
    }, [sortBy]);
    */

    const handleChangeSideSortBy = useCallback((value: "relevant" | "recent") => {
        setSideSortBy(value);
        //handleChangeSortBy(value);
    }, []);

    return (
        <JobsContext.Provider
            value={{
                page,
                jobs: jobs,
                isLoading,
                totalCount,
                selectedJob,
                selectedJobId,
                sideSortBy,
                fetchJobs,
                handleChangePage,
                handleChangeSelectedJobId,
                handleChangeSideSortBy,
            }}
        >
            {children}
        </JobsContext.Provider>
    )
}
