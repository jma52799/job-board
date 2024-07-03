import { Job } from "@prisma/client";
import JobListItem from "./job-list-item";
import { CiBookmark } from "react-icons/ci";
import PaginationControls from "./pagination-controls";

export default function BookmarkedJobsList({bookmarkedJobs}: {bookmarkedJobs: Job[]}) {
    return (
        <div className="flex flex-col w-full">
            <ul className="flex flex-col w-full mx-auto h-[612px] mt-8 mb-8 pt-4 gap-y-6 bg-stone-400/0 rounded-lg shadow-md">
                <BookmarkedJobItem />
                <BookmarkedJobItem />
                <BookmarkedJobItem />
                <BookmarkedJobItem />
                <BookmarkedJobItem />
                <BookmarkedJobItem />
            </ul>
            <PaginationControls />
        </div>
    )
}
/*
            {
                bookmarkedJobs?.map((bookmarkedJob) => (
                    <JobListItem 
                        key={bookmarkedJob.id}
                        job={bookmarkedJob}
                    />
                ))
            }
*/


//<JobListItem />
export function BookmarkedJobItem() {
    return (
        <li className="w-full bg-stone-200/0">
          <button 
            className="flex items-center w-full h-[76px] border-b border-solid border-black/5 text-left"
          >
            <div className="flex items-center justify-center h-[60px] w-[60px] bg-[#a1a1aa] ml-4 rounded">FT</div>
            <div className="flex ml-16 space-x-7 items-end">
              <h4 className="text-3xl font-semibold opacity-90">Amazon</h4>
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <div className="flex gap-x-4">
                <p className="text-lg opacity-90">$160,000</p>
                <p className="text-lg opacity-90">Queens, NY</p>
              </div>
            </div>
            <div className="ml-auto mr-4 flex gap-x-2 text-3xl items-end">
                <CiBookmark />
            </div>
          </button>
        </li>
    )
}