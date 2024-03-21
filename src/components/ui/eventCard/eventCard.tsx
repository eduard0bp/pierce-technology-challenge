'use client'
import { EventProps } from '@/interface/EventInterface'
import moment from 'moment'
import { Button, Modal } from '..'
import { Pencil, Trash2 } from 'lucide-react'
import { useContext, useState } from 'react'
import { deleteEvent } from '@/services/EventsService'
import toast from 'react-hot-toast'
import CreateEventModal from '../createEventModal/createEventModal'
import { ModalContext } from '../modal/modalContext'

interface EventCardProps {
  event: EventProps
  mutate: () => void
}

const EventCard = ({ event, mutate }: EventCardProps) => {
  const { openModal, closeModal } = useContext(ModalContext)

  const [openDetails, setOpenDetails] = useState(false)

  const handleDelete = async (id: string) => {
    try {
      await deleteEvent(id)

      toast.success('Event deleted successfully')

      mutate()
    } catch {
      toast.error('Error deleting event')
    }
  }

  return (
    <div>
      <p className="text-sm text-bluePrimary mb-2">
        Evento criado em: {moment(event.createdAt).format('DD/MM/YYYY')}
      </p>
      <div className="flex flex-col justify-between px-6 py-4 rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md border-2 border-border border-r-4 border-r-blueSecondary shadow-md relative">
        <div className="flex-1 flex flex-col gap-4 text-bluePrimary font-bold">
          <h1 className="text-2xl ">{event.title}</h1>
          <p className="text-lg">
            Event date:{' '}
            <span className="font-medium">
              {moment(event?.date).format('DD/MM/YYYY')}
            </span>
          </p>
        </div>

        <hr className="my-4 text-border" />

        <Button
          className="absolute top-3 right-6"
          onClick={() => handleDelete(event?.id!)}
        >
          <Trash2 />
        </Button>
        <Button
          className="absolute top-3 right-20"
          onClick={() => openModal(`editEvent${event.id}`)}
        >
          <Pencil />
        </Button>

        {openDetails && (
          <div className="mb-4 text-bluePrimary h-fit">
            <p className="text-md">{event.description}</p>
          </div>
        )}

        <Button
          variant={'link'}
          className="self-end text-bluePrimary text-base font-bold"
          onClick={() => setOpenDetails(!openDetails)}
        >
          {openDetails ? 'Ocultar detalhes' : 'Ver detalhes'}
        </Button>
      </div>

      <Modal id={`editEvent${event.id}`} title="Edit Event">
        <CreateEventModal
          closeModal={closeModal}
          mutate={mutate}
          isEdit
          event={event}
        />
      </Modal>
    </div>
  )
}

export default EventCard
