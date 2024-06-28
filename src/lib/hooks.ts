import { useContext } from "react";
import { SearchContext } from "@/contexts/search-context-provider";
import { JobsContext } from "@/contexts/jobs-context-provider";
import { useQuery } from "@tanstack/react-query";
import prisma from "@/lib/db";

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

//-----------Get Job Items-----------
export async function fetchJobs(searchQuery: string) { //: Promise<Job[]>
    const jobs = await prisma.job.findMany({
        where: {
            title: {
                contains: searchQuery
            }
        },
    });

    return jobs;
}

export function useSearchQuery(searchQuery: string) {
    const { data, isLoading } = useQuery({
        queryKey: ["jobs", searchQuery], 
        queryFn: () => fetchJobs(searchQuery),
        refetchOnWindowFocus: false,
        retry: false,
        enabled: Boolean(searchQuery),
    });

    return {
        jobs: data, 
        isLoading,
    }
}

