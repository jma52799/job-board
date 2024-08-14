import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getLogoBgColorFromJobId(jobId: string) {
  const colors = ['bg-blue-500', 'bg-yellow-500', 'bg-orange-500'];
  const hash = Array.from(jobId).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}





