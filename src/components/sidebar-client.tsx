'use client'

import { cn } from '@/lib/utils'

import { useSidebar } from '@/hooks/use-sidebar'

interface Props {
  children: React.ReactNode
}

export function SidebarClient({ children }: Props) {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <>
      <aside
        className={cn(
          'hidden h-screen w-full max-w-72 border-r xl:block xl:max-w-72',
          isSidebarOpen &&
            'fixed left-0 top-0 z-30 block bg-background xl:relative',
        )}
      >
        {children}
      </aside>

      {/* Sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className={cn(
            'hidden',
            isSidebarOpen &&
              'fixed inset-0 z-20 block bg-background/50 xl:bg-transparent',
          )}
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}
