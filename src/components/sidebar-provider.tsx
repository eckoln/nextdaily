'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import { SidebarContext } from '@/hooks/use-sidebar'

interface Props {
  children: React.ReactNode
}

export function SidebarProvider({ children }: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const pathname = usePathname()

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  function toggleSidebar() {
    setSidebarOpen((value) => !value)
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
