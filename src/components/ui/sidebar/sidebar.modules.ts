import { useState } from 'react'

export const useSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => setCollapsed(!collapsed)

  return {
    collapsed,
    toggleSidebar
  }
}
