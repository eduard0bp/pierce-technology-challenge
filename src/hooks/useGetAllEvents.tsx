'use client'
import useSWR from 'swr'
import { BASE_URL, fetcher } from './utils'
import { EventProps } from '@/interface/EventInterface'

export const useGetAllEvents = () => {
  const { data, isLoading, mutate } = useSWR<EventProps[]>(
    `${BASE_URL}`,
    fetcher,
    {
      revalidateOnFocus: false,
      fallbackData: []
    }
  )

  return {
    events: data,
    eventsLoading: isLoading,
    mutate
  }
}
