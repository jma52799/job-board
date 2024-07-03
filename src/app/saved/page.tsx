import { Suspense } from "react";
import Loading from "../loading";
import BookmarkedJobsList from "@/components/bookmarkedJobs-list";
import prisma from "@/lib/db";

export default async function Saved() {

    const bookmarkedJobs = await prisma.bookmarked.findMany({
        include: {
            job: true,
        }
    })

    const jobs = bookmarkedJobs.map((bookmarked) => bookmarked.job);

    return (
        <Suspense fallback={<Loading />}>

                {
                    bookmarkedJobs && <BookmarkedJobsList bookmarkedJobs={jobs} />
                }

        </Suspense>
    );
  }