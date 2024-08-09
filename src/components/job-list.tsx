"use client";

import { useEffect } from "react";
import JobListItem from "./job-list-item"
import { useJobsContext } from "@/lib/hooks";
import Spinner from "./spinner";

type JobListProps = {
  page: number;
}

export default function JobList({page}: JobListProps) {
  const { jobs, totalCount, handleChangePage, isLoading } = useJobsContext();

  useEffect(() => {
    handleChangePage(page);
  }, [page, handleChangePage]);

  return (
    <ul className="flex flex-col items-center justify-center w-full h-[532px] overflow-y-scroll no-scrollbar">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobs?.map((job) => (
          <JobListItem 
            key={job.id}
            job={job}
          />
        ))
      }
    </ul>
  )
}


