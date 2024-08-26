"use client";

import { useEffect } from "react";
import JobListItem from "./job-list-item"
import { useJobsContext } from "@/lib/hooks";
import Spinner from "./spinner";

type JobListProps = {
  page: number;
}

export default function JobList() {
  const { jobs, isLoading } = useJobsContext();

  return (
    <ul className={`flex flex-col w-full h-[532px] overflow-y-scroll no-scrollbar ${isLoading ? 'items-center justify-center' : 'items-start'}`}>
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

