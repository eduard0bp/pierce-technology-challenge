import { z } from 'zod'

export const eventSchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be at least 2 characters long.' })
    .max(50, { message: 'Title cannot exceed 50 characters.' }),
  date: z.date().superRefine((date, ctx) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (date < today) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Event date cannot be in the past.'
      })
    }
  }),
  description: z
    .string()
    .min(2, { message: 'Description must be at least 2 characters long.' })
    .max(500, { message: 'Description cannot exceed 500 characters.' })
})
