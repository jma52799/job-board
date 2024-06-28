import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
export default function PaginationControls() {
  return (
    <div className="flex flex-grow items-center justify-center space-x-4">
      <PaginationButton>
        <MdNavigateBefore />
      </PaginationButton>
      <div className="py-1.5 px-2 rounded-full border border-solid border-black">
        <p className="text-xs">1 / 1002</p>
      </div>
      <PaginationButton>
        <MdNavigateNext />
      </PaginationButton>
    </div>
  )
}

function PaginationButton({children}: {children: React.ReactNode}) {
  return (
    <button className="hover:bg-[#d0d5d8] py-1.5 px-2 rounded-full border border-solid border-black">
      {children}
    </button>
  )
}
