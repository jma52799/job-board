import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SortingControls() {
    return (
        <div className="flex space-x-4 mr-2">
            <button className="flex items-center gap-x-1 px-3 py-1 border border-black/30 rounded-full">
                <CiLocationOn className="text-black"/>
                Location
            </button>
            <button className="flex items-center gap-x-1 px-3 py-1 border border-black/30 rounded-full">
                Onsite/Remote
                <RiArrowDropDownLine />
            </button>
            <button className="flex items-center gap-x-1 px-2 py-1 border border-black/30 rounded-full">
                Full-time Job
            </button>
            <button className="flex items-center gap-x-1 px-2 py-1 border border-black/30 rounded-full">
                Part-time
            </button>
            <button className="flex items-center gap-x-1 px-2 py-1 border border-black/30 rounded-full">
                Internship
            </button>
        </div>
    )
  }