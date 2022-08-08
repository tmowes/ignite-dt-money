import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { TransactionsTable } from './components/TransactionsTable'
import { Content } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <Content>
        <SearchForm />
        <TransactionsTable />
      </Content>
    </div>
  )
}
