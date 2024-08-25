"use client"

import { useJobsContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Job } from "@prisma/client";
import BookmarkIcon from "./bookmark-icon";
import { getLogoBgColorFromJobId, formatter } from "@/lib/utils";


export default function JobListItem({job}: {job: Job}) {
  const { selectedJobId, handleChangeSelectedJobId } = useJobsContext();
  const isActive = selectedJobId === job.id;
  const logoBgColor = getLogoBgColorFromJobId(job.id);

  const daysAgo = job.daysAgo;

  let displayDaysAgo;
  if (daysAgo > 7) {
    displayDaysAgo = `${Math.floor(daysAgo / 7)}w`;
  } else {
    displayDaysAgo = `${daysAgo}d`; // if daysAgo is 7 or less, show the actual number of days
  }

  return (
      <li className="w-full">
        <button 
          className={cn(
            "flex items-center w-full h-[76px] border-b border-solid border-black/5 text-left",
            {
              "bg-[#EFF1F2]": isActive
            }
          )}
            
          onClick={() => handleChangeSelectedJobId(job.id)}
        >
          <div className={`flex items-center justify-center h-[46px] w-[38px] text-white ${logoBgColor} ml-4 rounded`}>{job.logo}</div>
          <div className="ml-4">
            <h4 className="text-sm font-semibold opacity-90">{job.company}</h4>
            <h3 className="text-md font-bold">{job.title}</h3>
            <div className="flex gap-x-4">
              <p className="text-xs opacity-50">{formatter.format(job.salary)}</p>
              <p className="text-xs opacity-50">{job.location}</p>
            </div>
          </div>
          <div className="ml-auto mr-4 flex flex-col gap-y-2">
              <BookmarkIcon jobId={job.id} />
              <p className="text-xs">{displayDaysAgo}</p>
          </div>
        </button>
      </li>
  )
}


