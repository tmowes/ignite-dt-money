import { useTransaction } from '../../../../contexts/TransactionProvider'
import { currencyBRLFormat } from '../../../../utils/currencyBRLFormat'
import { datePtBRFormatter } from '../../../../utils/datePtBRFormatter'
import { TableContainer, PriceHighlight } from './styles'

export function TransactionsTable() {
  const { transactions } = useTransaction()

  return (
    <TableContainer>
      <tbody>
        {transactions.map(({ id, description, type, price, category, createdAt }) => (
          <tr key={id}>
            <td width="50%">{description}</td>
            <td>
              <PriceHighlight variant={type}>
                {type === 'outcome' && '- '}
                {currencyBRLFormat(price)}
              </PriceHighlight>
            </td>
            <td>{category}</td>
            <td>{datePtBRFormatter(new Date(createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}
