import JobListItem from "./job-list-item"
import { useJobsContext, useSearchContext, useSearchQuery  } from "@/lib/hooks";

export default function JobList() {
  const { jobs, isLoading, selectedJobId, handleChangeSelectedJobId  } = useJobsContext();

  return (
    <ul className="flex flex-col w-full h-[532px] overflow-y-scroll">
      {
        !isLoading && jobs?.map((job) => (
          <JobListItem 
            key={job.id}
            job={job}
          />
        ))
      }
    </ul>
  )
}

/*
export default function JobList() {
  return (
    <ul className="flex flex-col w-full h-[532px] overflow-y-scroll">
      <JobListItem />
      <JobListItem />
      <JobListItem />
      <JobListItem />
      <JobListItem />
      <JobListItem />
      <JobListItem />
    </ul>
  )
}
/*

<JobListItem />
<JobListItem />
<JobListItem />
<JobListItem />
<JobListItem />
<JobListItem />
<JobListItem />



jobs.map((job) => (
  <button
  >

  </button>

  <JobListItem 
    key={job.id} 
    job={job} 
  />
))
*/