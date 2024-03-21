import { z } from 'zod'

export const eventSchema = z.object({
  title: z.string().min(2).max(50),
  date: z.date(),
  description: z.string().min(2).max(500)
})
