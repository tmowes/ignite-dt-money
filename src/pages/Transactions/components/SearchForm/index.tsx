/* eslint-disable no-promise-executor-return */
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { useTransaction } from '../../../../contexts/TransactionProvider'
import { SearchFormSchema, searchSchema } from './searchSchema'
import { SearchContainer } from './styles'

export function SearchForm() {
  const { fetchTransactions } = useTransaction()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchSchema),
  })

  async function onSearchTransactions({ query }: SearchFormSchema) {
    await fetchTransactions(query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(onSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchContainer>
  )
}
