import { createContext, useState, useEffect, useMemo, useContext } from 'react'

import { api } from '../../libs/axios'
import {
  CreateTransactionDTO,
  Transaction,
  TransactionContextData,
  TransactionProviderProps,
} from './types'

export const TransactionsContext = createContext({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const { data } = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(data)
  }

  async function createTransaction(newTransaction: CreateTransactionDTO) {
    const { description, price, category, type } = newTransaction

    const { data } = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((prev) => [data, ...prev])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  const provideValues = useMemo(
    () => ({ transactions, fetchTransactions, createTransaction }),
    [transactions],
  )

  return (
    <TransactionsContext.Provider value={provideValues}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction(): TransactionContextData {
  const context = useContext(TransactionsContext)
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider')
  }
  return context
}
