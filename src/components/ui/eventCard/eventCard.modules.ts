import { useContext, useState } from 'react'
import { ModalContext } from '../modal/modalContext'
import { deleteEvent } from '@/services/EventsService'
import toast from 'react-hot-toast'

interface useEventCardProps {
  mutate: () => void
}

export const useEventCard = ({ mutate }: useEventCardProps) => {
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

  return {
    openDetails,
    setOpenDetails,
    openModal,
    closeModal,
    handleDelete
  }
}
