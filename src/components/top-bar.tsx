

export default function Topbar({children}: {children: React.ReactNode}) {
  return (
    <div className="flex items-center justify-between w-[900px] mx-auto h-[55px] bg-[#f4f4f5] rounded-full mb-4 shadow-md overflow-hidden">
      {children}
    </div>
  )
}

//rounded-t-lg

//use w-[60%]