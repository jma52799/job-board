"use client";

import {createContext, useCallback, useEffect, useState} from 'react';
import { Job } from "@prisma/client";
import {useSearchContext} from "@/lib/hooks";
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
    const { debouncedSearchQuery } = useSearchContext();
    const [jobs, setJobs] = useState([] as Job[]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
    const [sideSortBy, setSideSortBy] = useState<"relevant" | "recent">("relevant");

    //derived state
    const selectedJob: Job | undefined = jobs?.find((job) => job.id === selectedJobId);

    //event handler
    const fetchJobs = useCallback(async () => {
        setIsLoading(true);
        try {
            const { jobs, totalCount } = await getJobs(debouncedSearchQuery, page, sideSortBy);
            setJobs(jobs);
            setTotalCount(totalCount);
        } catch (error) {
            console.error('Failed to fetch jobs', error);
        } finally {
            setIsLoading(false);
        }
    }, [debouncedSearchQuery, page, sideSortBy]);

    useEffect(() => { 
        fetchJobs();
    }, [fetchJobs]);

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    }

    const handleChangeSelectedJobId = useCallback((id: Job['id']) => {
        setSelectedJobId(id);
    },[]);

    const handleChangeSideSortBy = useCallback((value: "relevant" | "recent") => {
        setSideSortBy(value);
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
