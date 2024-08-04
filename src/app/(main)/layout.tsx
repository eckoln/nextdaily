'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  feed: React.ReactNode
}

export default function Layout({ children, feed }: Props) {
  const layoutSegment = useSelectedLayoutSegment()

  return (
    <div className="flex">
      {/* Feed */}
      {feed}

      {/* Resource content */}
      <div
        className={cn(
          'hidden flex-1 flex-col lg:flex',
          layoutSegment === 'resources' && 'flex',
        )}
      >
        {children}
      </div>
    </div>
  )
}
