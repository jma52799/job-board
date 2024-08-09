"use client";

import { useJobsContext } from "@/lib/hooks";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const buttons = [
    "Full-time Job",
    "Part-time",
    "Internship",
]
export default function SortingControls() {
    //const { handleChangeSortBy } = useJobsContext();

    //TODO: Change the buttons for Location to a dropdown. The dropdown should contain the locations defined in types.ts

    //TODO: Change the buttons for Onsite & Remote to a dropdown. The dropdown should contain the choices Onsite & Remote.

    return (
        <div />
    )

    /*
    return (
        <div className="flex space-x-4 mr-2">
            <SortingButton onClick={() => handleChangeSortBy("Alabama")}>
                <CiLocationOn className="text-black"/>
                Location
            </SortingButton>
            <SortingButton onClick={() => handleChangeSortBy("remote")}>
                Onsite/Remote
                <RiArrowDropDownLine />
            </SortingButton>
            <SortingButton onClick={() => handleChangeSortBy("full-time")}>
                Full-time Job
            </SortingButton>
            <SortingButton onClick={() => handleChangeSortBy("part-time")}>
                Part-time
            </SortingButton>
            <SortingButton onClick={() => handleChangeSortBy("internship")}>
                Internship
            </SortingButton>
        </div>
    )
        */
  }

  export function SortingButton({children, onClick}: {children: React.ReactNode, onClick: () => void}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleOnClick = () => {
        setIsClicked(!isClicked);
        onClick();
    }

    return (
        <button 
            className={`flex items-center gap-x-1 px-3 py-1 border border-black/30 rounded-full ${isClicked ? "ring-blue-500 ring-2" : ""}`}
            onClick={handleOnClick}
        >
            {children}
        </button>
    )
  }