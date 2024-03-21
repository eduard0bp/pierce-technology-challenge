import { useGetAllEvents } from "@/hooks/useGetAllEvents"
import { useContext } from "react"
import { ModalContext } from "../modal/modalContext"

export const useEventList = () => {
  const { events, eventsLoading, mutate } = useGetAllEvents()

  const { openModal, closeModal } = useContext(ModalContext)

  const sortedEvents = events?.sort((a, b) => {
    const dateA = new Date(a.createdAt ?? Date.now()).getTime()
    const dateB = new Date(b.createdAt ?? Date.now()).getTime()
    return dateB - dateA
  })

  return {
    sortedEvents,
    eventsLoading,
    mutate,
    openModal,
    closeModal
  }
}