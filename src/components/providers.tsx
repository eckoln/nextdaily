'use client'

import { SidebarProvider } from './sidebar-provider'

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return <SidebarProvider>{children}</SidebarProvider>
}
