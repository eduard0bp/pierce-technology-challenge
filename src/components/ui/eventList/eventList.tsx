'use client'
import { ChevronsRight, Plus } from 'lucide-react'
import { Button, EventCard, Modal } from '..'
import { useGetAllEvents } from '@/hooks/useGetAllEvents'
import { useContext } from 'react'
import { ModalContext } from '../modal/modalContext'
import CreateEventModal from '../createEventModal/createEventModal'

const EventList = () => {
  const { events, eventsLoading, mutate } = useGetAllEvents()

  const { openModal, closeModal } = useContext(ModalContext)

  events?.sort((a, b) => {
    const dateA = new Date(a.createdAt ?? Date.now()).getTime()
    const dateB = new Date(b.createdAt ?? Date.now()).getTime()
    return dateB - dateA
  })

  return (
    <div className="bg-grayPrimary flex-1 lg:rounded-md flex flex-col p-6 max-h-full gap-3 shadow-lg">
      <div className="flex justify-between">
        <header className="flex gap-2 items-center">
          <ChevronsRight size={32} color="#0b1232" />
          <h1 className="text-2xl text-bluePrimary">Events</h1>
        </header>
        <Button
          className="flex items-center gap-2 bg-bluePrimary text-grayPrimary hover:bg-blueSecondary"
          onClick={() => openModal('createEvent')}
        >
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
            {events?.map(event => (
              <div key={event.id}>
                <EventCard event={event} mutate={mutate} />
                <hr className="my-4 text-border w-full" />
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal id="createEvent" title="Create Event">
        <CreateEventModal closeModal={closeModal} mutate={mutate} />
      </Modal>
    </div>
  )
}

export default EventList
