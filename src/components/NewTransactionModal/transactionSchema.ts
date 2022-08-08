import * as z from 'zod'

export const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

export type NewTransactionFormSchema = z.infer<typeof newTransactionSchema>
