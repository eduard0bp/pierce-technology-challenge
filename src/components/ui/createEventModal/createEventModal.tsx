'use client'
import {
  Button,
  Calendar,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea
} from '..'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { EventProps } from '@/interface/EventInterface'
import { useCreateEventModal } from './createEventModal.modules'

interface CreateEventModalProps {
  closeModal: (id: string) => void
  mutate: () => void
  isEdit?: boolean
  event?: EventProps
}

const CreateEventModal = ({
  closeModal,
  mutate,
  isEdit = false,
  event
}: CreateEventModalProps) => {
  const { form, onSubmit, handleUpdate } = useCreateEventModal({
    closeModal,
    mutate,
    isEdit,
    event
  })

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(isEdit ? handleUpdate : onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto" align="end">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date => {
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Digit your event name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter a description for your event"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-end mt-4 gap-4">
            <Button
              type="button"
              className="bg-grayPrimary text-blueSecondary w-[100px] hover:bg-grayPrimary/70"
              onClick={() =>
                closeModal(
                  `${isEdit ? `editEvent${event?.id}` : 'createEvent'}`
                )
              }
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="bg-bluePrimary text-grayPrimary hover:bg-blueSecondary w-[100px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEdit ? 'Edit' : 'Create'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default CreateEventModal
