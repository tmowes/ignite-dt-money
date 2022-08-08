import { ReactNode } from 'react'

export type TransactionContextData = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionDTO) => Promise<void>
}

export type TransactionProviderProps = {
  children: ReactNode
}

export type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export type CreateTransactionDTO = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
