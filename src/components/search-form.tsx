"use client";

import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "@/lib/hooks";
import { useJobsContext } from "@/lib/hooks";

export default function SearchForm() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();
  const { handleChangePage } = useJobsContext();

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleChangePage(1); //This will trigger a new fetch
  }

  return (
    <form
      className="flex items-center rounded-full p-4"
      onSubmit={handleOnSubmit}
    >
      <input 
        className="bg-transparent border-none focus:outline-none ml-2"
        spellCheck="false"
        type="search" 
        placeholder="Find real jobs..."
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
      />
      <button className="ml-2 mr-2" type="submit">
        <FaSearch id="search-icon" />
      </button>
    </form>
  )
}


