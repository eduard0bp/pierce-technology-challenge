'use client'
import { EventProps } from '@/interface/EventInterface'
import moment from 'moment'
import { Button } from '..'
import { Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface EventCardProps {
  event: EventProps
}

const EventCard = ({ event }: EventCardProps) => {
  const [openDetails, setOpenDetails] = useState(false)

  return (
    <div>
      <p className="text-sm text-bluePrimary mb-2">
        Evento criado em: {moment(event.created_at).format('DD/MM/YYYY')}
      </p>
      <div className="flex flex-col justify-between px-6 py-4 rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md border-2 border-border border-r-4 border-r-blueSecondary shadow-md relative">
        <div className="flex-1 flex flex-col gap-4 text-bluePrimary">
          <h1 className="text-2xl ">{event.title}</h1>
          <p className="text-lg">{moment(event?.date).format('DD/MM/YYYY')}</p>
        </div>

        <hr className="my-4 text-border" />

        <Button className="absolute top-3 right-6">
          <Trash2 />
        </Button>
        <Button className="absolute top-3 right-20">
          <Pencil />
        </Button>

        {openDetails && (
          <div className="mb-4 text-bluePrimary h-fit animate-in">
            <p className="text-md">{event.description}</p>
          </div>
        )}

        <Button
          variant={'link'}
          className="self-end text-bluePrimary text-base"
          onClick={() => setOpenDetails(!openDetails)}
        >
          {openDetails ? 'Ocultar detalhes' : 'Ver detalhes'}
        </Button>
      </div>
    </div>
  )
}

export default EventCard
