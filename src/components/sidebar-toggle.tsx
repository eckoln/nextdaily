'use client'

import { MenuIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useSidebar } from '@/hooks/use-sidebar'

export function SidebarToggle() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <Button
      className="xl:hidden"
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? <XIcon size={16} /> : <MenuIcon size={16} />}
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
}
