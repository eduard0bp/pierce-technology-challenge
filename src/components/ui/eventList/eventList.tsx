'use client'

import { ChevronsRight, Plus } from 'lucide-react'
import { Button, CreateEventModal, EventCard, Modal } from '..'
import { useEventList } from './eventList.modules'

const EventList = () => {
  const { closeModal, openModal, sortedEvents, eventsLoading, mutate } =
    useEventList()

  return (
    <div className="bg-grayPrimary flex-1 lg:rounded-md flex flex-col p-6 max-h-full gap-3 shadow-lg">
      {eventsLoading ? (
        <div className="flex justify-center items-center h-full text-2xl text-bluePrimary">
          Loading events...
        </div>
      ) : (
        <>
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
            {sortedEvents?.length === 0 ? (
              <div className="flex justify-center items-center h-full text-2xl text-bluePrimary">
                No events found
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {sortedEvents?.map(event => (
                  <div key={event.id}>
                    <EventCard event={event} mutate={mutate} />
                    <hr className="my-4 text-border w-full" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      <Modal id="createEvent" title="Create Event">
        <CreateEventModal closeModal={closeModal} mutate={mutate} />
      </Modal>
    </div>
  )
}

export default EventList
