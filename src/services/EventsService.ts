import { BASE_URL } from '@/hooks/utils'
import { EventProps } from '@/interface/EventInterface'
import axios from 'axios'

export const deleteEvent = async (id: string) => {
  return await axios.delete(`${BASE_URL}/${id}`)
}

export const updateEvent = async (id: string, data: EventProps) => {
  return await axios.put(`${BASE_URL}/${id}`, data)
}
