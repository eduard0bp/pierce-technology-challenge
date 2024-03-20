import { EventList, Header, Sidebar } from '@/components/ui'

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-2 lg:p-4 h-full w-full">
      <Header />
      <div className="flex-1 flex lg:gap-3 overflow-hidden">
        <Sidebar />
        <EventList />
      </div>
    </div>
  )
}
