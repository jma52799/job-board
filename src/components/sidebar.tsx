
export default function Sidebar({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col w-[340px] bg-white">{children}</div>
  )
}
