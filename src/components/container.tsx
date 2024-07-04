import { cn } from "@/lib/utils"

type ContainerProps = {
  children: React.ReactNode,
  className?: string
}

export default function Container({children, className}: ContainerProps) {
  return (
    <div 
      className={cn(
        "flex w-full h-[630px] bg-[#f4f4f5] rounded-lg overflow-x-hidden shadow-md",
        className
      )}
    >
      {children}
    </div>
  )
}


  