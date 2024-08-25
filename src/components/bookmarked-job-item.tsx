"use client";

import SavedPageBookmarkIcon from "@/components/saved-page-bookmark-icon";
import { useRouter } from 'next/navigation';
import { useJobsContext } from '@/lib/hooks';
import { Job } from "@prisma/client";
import { getLogoBgColorFromJobId, formatter } from "@/lib/utils";

export default function BookmarkedJobItem({ job }: { job: Job }) {
    const logoBgColor = getLogoBgColorFromJobId(job.id);
    const router = useRouter();
    const { handleChangeSelectedJobId } = useJobsContext();

    const handleOnClick = () => {
        handleChangeSelectedJobId(job.id);
        router.push('/');
    };

    return (
        <li className="w-full bg-stone-200/0">
          <button 
            className="flex items-center w-full h-[76px] border-b border-solid border-black/5 text-left"
            onClick={handleOnClick}
          >
            <div className={`flex items-center justify-center h-[60px] w-[60px] bg-[#a1a1aa] ml-4 rounded ${logoBgColor}`}>{job.logo}</div>
            <div className="flex ml-16 space-x-7 items-end">
              <h4 className="text-3xl font-semibold opacity-90">{job.company}</h4>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <div className="flex gap-x-4">
                <p className="text-lg opacity-90">{formatter.format(job.salary)}</p>
                <p className="text-lg opacity-90">{job.location}</p>
              </div>
            </div>
            <div className="ml-auto mr-4 flex gap-x-2 text-3xl items-end">
                <SavedPageBookmarkIcon jobId={job.id} />
            </div>
          </button>
        </li>
    );
}
