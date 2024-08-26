import { Suspense } from "react";
import Loading from "../loading";
import BookmarkedJobsList from "@/components/bookmarkedJobs-list";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth-no-edge";
import { redirect } from "next/navigation";

export default async function Saved() {
    
    // User must be authenticated first
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    // Fetch the bookmarked jobs for the authenticated user
    const bookmarkedJobs = await prisma.bookmarked.findMany({
        where: {
            userId: session.user.id,
        },
        include: {
            job: true,
        },
    });

    const jobs = bookmarkedJobs.map((bookmarked) => bookmarked.job);

    return (
        <Suspense fallback={<Loading />}>

                {
                    bookmarkedJobs && <BookmarkedJobsList bookmarkedJobs={jobs} />
                }

        </Suspense>
    );
  }