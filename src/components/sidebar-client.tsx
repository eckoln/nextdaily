'use client'

import { cn } from '@/lib/utils'

import { useSidebar } from '@/hooks/use-sidebar'

interface Props {
  children: React.ReactNode
}

export function SidebarClient({ children }: Props) {
  const { isSidebarOpen } = useSidebar()

  return (
    <aside
      className={cn(
        'hidden w-full border-r lg:max-w-sm xl:block xl:max-w-72',
        isSidebarOpen &&
          'absolute left-0 top-0 z-30 block bg-background xl:relative',
      )}
    >
      {children}
    </aside>
  )
}
