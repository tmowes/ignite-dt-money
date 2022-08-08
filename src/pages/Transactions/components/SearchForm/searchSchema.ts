import * as z from 'zod'

export const searchSchema = z.object({
  query: z.string(),
})

export type SearchFormSchema = z.infer<typeof searchSchema>
