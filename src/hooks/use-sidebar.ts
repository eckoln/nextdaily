import { createContext, useContext } from 'react'

interface Props {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const SidebarContext = createContext<Props | undefined>(undefined)

export const useSidebar = (): Props => {
  const context = useContext(SidebarContext)

  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }

  return context
}
