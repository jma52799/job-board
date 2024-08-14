"use client";

import { AiOutlineClockCircle } from "react-icons/ai";
import { PiMoneyThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { useJobsContext } from "@/lib/hooks";
import { useState } from "react";
import JobDetailsBookmark from "./jobDetails-bookmark";
import { getLogoBgColorFromJobId } from "@/lib/utils";

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
            <p className="text-sm">Internet & Software</p>
          </div>
        </div>

        <p className="text-sm mt-2">Posted 1 week ago. Apply by December 12, 2024 at 10 PM</p>

        <div className="flex space-x-3 h-[40px] mt-4">
          <JobDetailsBookmark jobId={selectedJob?.id} />
          <button className="text-white bg-black px-3 rounded border border-solid border-black">Apply</button>
        </div>

        <div className="mt-4 border-t border-solid border-black/15" />

        <h3 className="text-xl font-bold mt-4">At a glance</h3>

        <section className="flex space-x-8 mt-4 w-[566px]">
          <div>
            <h4 className="text-base font-bold">Skills</h4>
            <p className="w-[165px]">Other skills may apply</p>
          </div>
          <ul className="flex flex-wrap gap-2 items-start text-[#494d4f] text-xs">
            <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
              JavaScript
            </li>
            <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
              CSS
            </li>
            <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
              HTML
            </li>
            <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
              Node.js
            </li>
            <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
              React
            </li>
          </ul>
        </section>

        <section className="flex space-x-8 mt-4 w-[566px]">
          <div className="w-[165px]">
            <h4 className="text-base font-bold">Educations</h4>
            <p className="w-[165px]">Qualifications the employer wants</p>
          </div>
          <ul className="flex flex-wrap gap-2 items-start text-[#494d4f] text-xs">
              <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
                Bachelors
              </li>
              <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
                Masters
              </li>
              <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
                Computer Science
              </li>
              <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
                Node.js
              </li>
              <li className="bg-[#e4e4e7] px-2.5 py-1.5 rounded">
                React
              </li>
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
            <p>$160,000</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-[25px] w-[25px] bg-[#e4e4e7] rounded">
              <CiLocationOn />
            </div>
            <p>Global</p>
          </div>
        </section>

        <div className="mt-4 border-t border-solid border-black/15" />

        <p className={`mt-4 w-[566px] ${!isExpanded ? "line-clamp-3" : ""}`}>
          ISAFE Enterprises is seeking a skilled and innovative Machine Learning Engineer to join our dynamic team. 
          The ideal candidate will be responsible for developing and deploying a website chatbot that enhances customer support 
          and facilitates document signing. Additionally, the candidate will integrate artificial intelligence tools into the 
          ISAFE Direct Platform to assist administrators in creating and disseminating online digital forms.
          grate artificial intelligence tools into the 
          ISAFE Direct Platform to assist administrators in creating and disseminating online digital forms.
          grate artificial intelligence tools into the 
          ISAFE Direct Platform to assist administrators in creating and disseminating online digital forms.
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



/*
          <div className="flex items-center gap-x-1 text-black px-3 rounded border border-solid border-black">
            <BookmarkIcon jobId={selectedJob?.id} />
            Save
          </div>
*/