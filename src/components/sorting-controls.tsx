"use client";

import { motion } from "framer-motion";

export default function SortingControls() {
    //return <div />
    
  return (
    <div className="relative flex-grow bg-black h-full overflow-hidden rounded-full flex items-center border-l-4 border-black">
      <motion.div
        className="whitespace-nowrap text-white italic"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, 
        }}
        style={{ fontSize: "28px", letterSpacing: "0.2em", fontWeight: "bold" }}
      >
        Good luck on your job hunt! &nbsp;
        Good luck on your job hunt! &nbsp;
      </motion.div>
    </div>
  );
  
}


/*
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
*/