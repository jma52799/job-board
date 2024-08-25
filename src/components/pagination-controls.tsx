"use client";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useJobsContext } from "@/lib/hooks";

export default function PaginationControls() {
  const { page, totalCount, handleChangePage } = useJobsContext();

  const previousPage = page > 1 ? page - 1 : null;
  const nextPage = totalCount > page * 7 ? page + 1 : null;

  const updatePage = (newPage: number) => {
    handleChangePage(newPage);
  };

  return (
    <div className="flex flex-grow items-center justify-center space-x-4">
      {previousPage && (
        <button
          onClick={() => updatePage(previousPage)}
          className="hover:bg-[#d0d5d8] py-1.5 px-2 rounded-full border border-solid border-black"
        >
          <MdNavigateBefore />
        </button>
      )}
      <div className="py-1.5 px-2 rounded-full border border-solid border-black">
        <p className="text-xs">{page} / {Math.ceil(totalCount / 7)}</p>
      </div>
      {nextPage && (
        <button
          onClick={() => updatePage(nextPage)}
          className="hover:bg-[#d0d5d8] py-1.5 px-2 rounded-full border border-solid border-black"
        >
          <MdNavigateNext />
        </button>
      )}
    </div>
  );
}

/*
"use client";


import { useJobsContext } from "@/lib/hooks";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Link from "next/link";

export default function PaginationControls() {
  const { page, totalCount } = useJobsContext();

  const previousPath = page > 1 ? `?page=${page - 1}` : "";
  const nextPath = totalCount > page * 7 ? `?page=${page + 1}` : "";

  return (
    <div className="flex flex-grow items-center justify-center space-x-4">
      <PaginationButton path={previousPath}>
        <MdNavigateBefore />
      </PaginationButton>
      <div className="py-1.5 px-2 rounded-full border border-solid border-black">
        <p className="text-xs">{page} / {Math.ceil(totalCount / 7)}</p>
      </div>
      <PaginationButton path={nextPath}>
        <MdNavigateNext />
      </PaginationButton>
    </div>
  );
}

function PaginationButton({ path, children }: { path: string, children: React.ReactNode }) {
  if (path) {
    return (
      <Link href={path} className="hover:bg-[#d0d5d8] py-1.5 px-2 rounded-full border border-solid border-black">
        {children}
      </Link>
    );
  }
  
  //return <div className="py-1.5 px-2 rounded-full border border-solid border-black opacity-50 cursor-not-allowed">{children}</div>
  return <div />
}
*/