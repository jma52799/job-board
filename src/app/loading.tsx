import Skeleton from "@/components/skeleton";

export default function Loading() {
    return (
      <div className="flex flex-col items-center gap-y-4 pt-20">
        <Skeleton className="h-4 w-[850px]" />
        <Skeleton className="h-4 w-[700px]" />
        <Skeleton className="h-4 w-[730px]" />
      </div>
    );
}