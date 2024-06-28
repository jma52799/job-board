import { TbFilterDown } from "react-icons/tb";
export default function SideSortingControls() {
  return (
    <section className="flex items-center gap-x-2 text-xs">
      <button className="text-white bg-[#3c4041] hover:bg-[#3c4041] py-1.5 px-2 rounded">Relevant</button>
      <button className="text-black bg-slate-200 hover:bg-[#d0d5d8] py-1.5 px-2 rounded">Recent</button>
    </section>
  )
}

