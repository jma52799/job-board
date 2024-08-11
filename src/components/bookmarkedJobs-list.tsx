"use client";
import { Job } from "@prisma/client";
import BookmarkedJobItem from "./bookmarked-job-item";
import { useState } from "react";

export default function BookmarkedJobsList({ bookmarkedJobs }: { bookmarkedJobs: Job[] }) {

    return (
        <div className="flex flex-col w-full">
            <ul className="flex flex-col w-full mx-auto h-[612px] mt-8 mb-8 pt-4 gap-y-6 bg-stone-400/0 rounded-lg shadow-md overflow-y-scroll no-scrollbar">
                {bookmarkedJobs?.map((bookmarkedJob) => (
                    <BookmarkedJobItem 
                        key={bookmarkedJob.id} 
                        job={bookmarkedJob} 
                        
                    />
                ))}
            </ul>
        </div>
    );
}
