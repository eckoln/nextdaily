import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <ul className="space-y-2 py-2 xl:space-y-4 xl:py-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>
          <div className="inline-flex w-full flex-col space-y-2 p-3">
            <div className="flex justify-between">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </li>
      ))}
    </ul>
  )
}
