import { PaneContainer, PaneContent, PaneHeader } from '@/components/pane'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <PaneContainer>
      <PaneHeader />
      <PaneContent>
        <div className="px-2 py-4 xl:px-6 xl:py-7">
          <div className="grid grid-cols-1 gap-8 2xl:grid-cols-3">
            <div className="2xl:col-span-2">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-1/3" />
                </div>
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <div className="order-first 2xl:order-last 2xl:col-span-1">
              <Skeleton className="h-48 w-full" />
            </div>
          </div>
        </div>
      </PaneContent>
    </PaneContainer>
  )
}
