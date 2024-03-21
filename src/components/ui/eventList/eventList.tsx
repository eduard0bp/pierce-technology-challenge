'use client'
import { ChevronsRight, Plus } from 'lucide-react'
import { Button, EventCard } from '..'
import { useGetAllEvents } from '@/hooks/useGetAllEvents'

const EventList = () => {
  const { events, eventsLoading, mutate } = useGetAllEvents()

  const orderEvents = events?.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  return (
    <div className="bg-grayPrimary flex-1 lg:rounded-md flex flex-col p-6 max-h-full gap-3 shadow-lg">
      <div className="flex justify-between">
        <header className="flex gap-2 items-center">
          <ChevronsRight size={32} color="#0b1232" />
          <h1 className="text-2xl text-bluePrimary">Events</h1>
        </header>
        <Button className="flex items-center gap-2 bg-bluePrimary text-grayPrimary hover:bg-blueSecondary">
          <Plus />
          Add Event
        </Button>
      </div>
      <hr />
      <div className="overflow-auto flex-1 lg:pr-4">
        {events?.length === 0 ? (
          <div className="flex justify-center items-center h-full text-2xl text-bluePrimary">
            No events found
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {orderEvents?.map(event => (
              <>
                <EventCard key={event.id} event={event} />
                <hr className="my-4 text-border w-full" />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EventList
