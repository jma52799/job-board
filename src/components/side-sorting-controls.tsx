"use client";

import { useJobsContext } from "@/lib/hooks";

export default function SideSortingControls() {
  const { sideSortBy, handleChangeSideSortBy } = useJobsContext();

  return (
    <section className="flex items-center gap-x-2 text-xs">
      <SideSortingButtons 
        isActive={sideSortBy.includes("relevant")}
        onClick={() => handleChangeSideSortBy("relevant")}
      >
        Relevant
      </SideSortingButtons>
      <SideSortingButtons 
        isActive={sideSortBy.includes("recent")}
        onClick={() => handleChangeSideSortBy("recent")}
      >
        Recent
      </SideSortingButtons>
    </section>
  )
}

type SideSortingButtonsProps = {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

function SideSortingButtons({children, isActive, onClick}: SideSortingButtonsProps) {
  return (
    <button 
      className={`text-black py-1.5 px-2 rounded ${isActive ? "bg-[#3c4041] text-white" : "bg-slate-200 hover:bg-[#d0d5d8]"}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}