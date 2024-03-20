'use client'
import { Button } from '@/components/ui/button'
import { useGetAllEvents } from '@/hooks/useGetAllEvents'
import { deleteEvent } from '@/services/EventsService'

export default function Home() {
  const { events, mutate } = useGetAllEvents()

  const handleDeleteEvent = async (id: string) => {
    await deleteEvent(id)

    mutate()
  }

  return (
    <main>
      {events?.map((event: any) => (
        <>
          <p key={event.id}>{event.title}</p>
          <Button onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
        </>
      ))}
    </main>
  )
}
