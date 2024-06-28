"use client";

import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "@/lib/hooks";

export default function SearchForm() {
  const { debouncedSearchQuery, handleChangeSearchQuery } = useSearchContext();

  return (
    <form
      className="flex items-center rounded-full"
      onSubmit={
        (e) => e.preventDefault()
      }
      action="#"
    >
      <input 
        className="bg-transparent border-none focus:outline-none ml-2"
        spellCheck="false"
        type="search" 
        placeholder="Find real jobs..."
        value={debouncedSearchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
      />
      <button className="ml-2 mr-2" type="submit">
        <FaSearch id="search-icon" />
      </button>
    </form>
  )
}


