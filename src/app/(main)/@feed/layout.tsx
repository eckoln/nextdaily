'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

import { PaneContainer, PaneContent, PaneHeader } from '@/components/pane'
import { SidebarToggle } from '@/components/sidebar-toggle'

import { cn } from '@/lib/utils'

import { useTagParams } from '@/hooks/use-tag-params'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const layoutSegment = useSelectedLayoutSegment()
  const tagParam = useTagParams()

  return (
    <aside
      className={cn(
        `w-full border-r lg:flex lg:max-w-sm`,
        layoutSegment === 'resources' && 'hidden',
      )}
    >
      <PaneContainer>
        <PaneHeader>
          <SidebarToggle />
          <h1 className="capitalize">{tagParam || 'Feed'}</h1>
        </PaneHeader>
        <PaneContent>{children}</PaneContent>
      </PaneContainer>
    </aside>
  )
}
