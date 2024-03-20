'use client'
import { Modal } from '@/components/ui'
import { Button } from '@/components/ui/button/button'
import { ModalContext } from '@/components/ui/modal/modalContext'
import { useGetAllEvents } from '@/hooks/useGetAllEvents'
import { deleteEvent } from '@/services/EventsService'
import { useContext } from 'react'
import toast from 'react-hot-toast'

export default function Home() {
  const { events, mutate } = useGetAllEvents()
  const { openModal } = useContext(ModalContext)

  const modal = true

  const handleDeleteEvent = async (id: string) => {
    await deleteEvent(id)

    mutate()
    toast.success('Event deleted!')
  }

  return (
    <main>
      {events?.map((event: any) => (
        <>
          <p key={event.id}>{event.title}</p>
          <Button onClick={() => openModal('modal')}>Delete</Button>
        </>
      ))}

      {modal && (
        <Modal title="Modal" id="modal">
          <p>Teste</p>
        </Modal>
      )}
    </main>
  )
}
