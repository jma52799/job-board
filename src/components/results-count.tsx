"use client"

import { useJobsContext } from "@/lib/hooks"

export default function ResultsCount() {
  const { totalCount } = useJobsContext()

  return (
    <p className="text-sm">
      <strong>{totalCount}</strong> results
    </p>
  )
}
