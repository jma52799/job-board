

export default function SidebarTop({children}: {children: React.ReactNode}) {
  return (
    <div className="flex items-center justify-between border-b border-solid border-black/5 py-2 px-4">{children}</div>
  )
}
