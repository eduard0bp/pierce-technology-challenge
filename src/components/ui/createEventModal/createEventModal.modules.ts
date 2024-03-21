import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createEvent, updateEvent } from '@/services/EventsService'
import { eventSchema } from '@/schema/EventSchema'
import { EventProps } from '@/interface/EventInterface'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

interface useCreateEventModalProps {
  closeModal: (id: string) => void
  mutate: () => void
  isEdit?: boolean
  event?: EventProps
}

export const useCreateEventModal = ({
  closeModal,
  mutate,
  isEdit,
  event
}: useCreateEventModalProps) => {
  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: isEdit ? event?.title : '',
      date: isEdit ? new Date(event?.date ?? new Date()) : new Date(),
      description: isEdit ? event?.description : ''
    }
  })

  async function onSubmit(values: z.infer<typeof eventSchema>) {
    try {
      const formattedValues = {
        ...values,
        date: format(values.date, 'yyyy-MM-dd')
      }

      await createEvent(formattedValues)

      closeModal('createEvent')

      mutate()

      toast.success('Event created successfully')
    } catch (error) {
      toast.error('Error creating event')
    }
  }

  async function handleUpdate(values: z.infer<typeof eventSchema>) {
    try {
      const formattedValues = {
        ...values,
        date: format(values.date, 'yyyy-MM-dd')
      }

      await updateEvent(event?.id!, formattedValues)

      mutate()

      closeModal(`editEvent${event?.id}`)

      toast.success('Event updated successfully')
    } catch (error) {
      toast.error('Error updating event')
    }
  }

  return {
    form,
    onSubmit,
    handleUpdate
  }
}
