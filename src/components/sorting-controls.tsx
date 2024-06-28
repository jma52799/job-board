"use client";

import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const buttons = [
    "Full-time Job",
    "Part-time",
    "Internship",
]
export default function SortingControls() {
    return (
        <div className="flex space-x-4 mr-2">
            <SortingButton>
                <CiLocationOn className="text-black"/>
                Location
            </SortingButton>
            <SortingButton>
                Onsite/Remote
                <RiArrowDropDownLine />
            </SortingButton>
            {
                buttons.map((button) => (
                    <SortingButton key={button}>{button}</SortingButton>
                ))
            }
        </div>
    )
  }

  export function SortingButton({children}: {children: React.ReactNode}) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <button 
            className={`flex items-center gap-x-1 px-3 py-1 border border-black/30 rounded-full ${isClicked ? "ring-blue-500 ring-2" : ""}`}
            onClick={() => setIsClicked(!isClicked)}
        >
            {children}
        </button>
    )
  }