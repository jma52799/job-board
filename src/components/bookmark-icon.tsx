"use client"

import { Job } from "@prisma/client";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

export default function BookmarkIcon({ jobId }: { jobId: Job['id'] }) {
    return (
        <button>
            <BookmarkFilledIcon />
        </button>
    )
}