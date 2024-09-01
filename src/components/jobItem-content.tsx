"use client";

import { AiOutlineClockCircle } from "react-icons/ai";
import { PiMoneyThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { useJobsContext } from "@/lib/hooks";
import { useState } from "react";
import JobDetailsBookmark from "./jobDetails-bookmark";
import { getLogoBgColorFromJobId } from "@/lib/utils";
import { toast } from "sonner";
import { formatter } from "@/lib/utils";

export default function JobItemContent() {
  const { selectedJob } = useJobsContext();
  const [isExpanded, setIsExpanded] = useState(false);
  const logoBgColor = selectedJob && getLogoBgColorFromJobId(selectedJob.id);

  if (!selectedJob) {
    return (
      <div className="flex items-center justify-center h-full w-[710px]">
        <p className="text-center text-gray-500 text-md font-medium">
          Click on any job to the left to view its content
        </p>
      </div>
    );
  }



  return (
    <div className="flex flex-col py-10 px-14 overflow-y-scroll overflow-x-hidden no-scrollbar">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center justify-center h-[60px] w-[60px] text-white ${logoBgColor} rounded`}>{selectedJob.logo}</div>
          <div className="leading-6">
            <h1 className="text-2xl font-bold">{selectedJob.title}</h1>
            <p className="text-sm">{selectedJob.category}</p>
          </div>
        </div>

        <p className="text-sm mt-2">Posted {selectedJob.daysAgo} days ago. Apply by {new Date(selectedJob.deadline).toLocaleDateString()}</p>

        <div className="flex space-x-3 h-[40px] mt-4">
          <JobDetailsBookmark jobId={selectedJob?.id} />
          <button 
            onClick={() => { toast.warning('Sorry! This function is not yet available') }}
            className="text-white bg-black px-3 rounded border border-solid border-black"
          >
            Apply
          </button>
        </div>

        <div className="mt-4 border-t border-solid border-black/15" />

        <h3 className="text-xl font-bold mt-4">At a glance</h3>

        <section className="flex space-x-8 mt-4 w-[566px]">
          <div>
            <h4 className="text-base font-bold">Skills</h4>
            <p className="w-[165px]">Other skills may apply</p>
          </div>
          <ul className="flex flex-wrap gap-2 items-start text-[#494d4f] text-xs">
            {selectedJob.skills.map((skill, index) => (
              <li key={index} className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex space-x-8 mt-4 w-[566px]">
          <div className="w-[165px]">
            <h4 className="text-base font-bold">Educations</h4>
            <p className="w-[165px]">Minimum Qualifications the employer wants</p>
          </div>
          <ul className="flex flex-wrap gap-2 items-start text-[#494d4f] text-xs">
            {selectedJob.educations.map((education, index) => (
                <li key={index} className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
                  {education}
                </li>
            ))}
          </ul>
        </section>

        <section className="flex space-x-16 mt-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-[25px] w-[25px] bg-[#e4e4e7] rounded">
              <AiOutlineClockCircle />
            </div>
            <p>Full-Time</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-[25px] w-[25px] bg-[#e4e4e7] rounded">
              <PiMoneyThin />
            </div>
            <p>{formatter.format(selectedJob.salary)}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-[25px] w-[25px] bg-[#e4e4e7] rounded">
              <CiLocationOn />
            </div>
            <p>{selectedJob.remote}</p>
          </div>
        </section>

        <div className="mt-4 border-t border-solid border-black/15" />

        <p className={`mt-4 w-[566px] ${!isExpanded ? "line-clamp-3" : ""}`}>
          {selectedJob.company} is looking for a talented and motivated {selectedJob.title} to join our forward-thinking team. 
In this role, you will be responsible for driving key projects that contribute to the success of the company. 
You will collaborate with cross-functional teams to develop and implement solutions that improve business processes 
and enhance customer experiences. Your expertise will play a crucial role in advancing the mission and delivering 
high-quality results that make a difference.
          <br />
          Join us and contribute to the ongoing innovation at {selectedJob.company} as we continue to push the boundaries 
in our industry and provide exceptional value to our clients and customers.
        </p>
        <button 
          className="self-start text-blue-700 mt-2"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>

    </div>

  )
}
