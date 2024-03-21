'use client'
import { CircleUser, CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { Button } from '..'
import { useSidebar } from './sidebar.modules'

const Sidebar = () => {
  const { collapsed, toggleSidebar } = useSidebar()

  return (
    <div
      className={`h-full bg-grayPrimary ${
        collapsed ? 'w-16' : 'w-72'
      } rounded-md shadow-lg lg:flex lg:flex-col items-center p-2 py-4 gap-2 transition-width duration-300 ease-in-out lg:relative hidden`}
    >
      <Button onClick={toggleSidebar} className="absolute top-2 right-2">
        {collapsed ? (
          <CircleChevronRight size={20} />
        ) : (
          <CircleChevronLeft size={20} />
        )}
      </Button>
      <h1
        className={`text-2xl text-bluePrimary font-bold mt-5 ${
          collapsed ? 'hidden' : ''
        }`}
      >
        Welcome
      </h1>
      <CircleUser size={64} className={`${collapsed ? 'hidden' : ''}`} />
      <p className={`text-xl text-bluePrimary ${collapsed ? 'hidden' : ''}`}>
        Pierce Technology User
      </p>
    </div>
  )
}

export default Sidebar
