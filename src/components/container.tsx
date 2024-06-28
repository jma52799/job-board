
export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="flex w-full h-[630px] bg-[#f4f4f5] rounded-lg overflow-x-hidden shadow-md">{children}</div>
  )
}


//rounded-b-lg