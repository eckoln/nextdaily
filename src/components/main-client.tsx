'use client'

import { cn } from '@/lib/utils'

import { useSidebar } from '@/hooks/use-sidebar'

interface Props {
  children: React.ReactNode
}

export function MainClient({ children }: Props) {
  const { isSidebarOpen } = useSidebar()

  return (
    <main className={cn('flex-1', isSidebarOpen && 'hidden lg:block')}>
      {children}
    </main>
  )
}
