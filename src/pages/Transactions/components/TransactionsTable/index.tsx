import { TableContainer, PriceHighlight } from './styles'

export function TransactionsTable() {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="income">R$ 2.000,00</PriceHighlight>
          </td>
          <td>Venda</td>
          <td>13/08/2022</td>
        </tr>
        <tr>
          <td width="50%">Hambúrguer</td>
          <td>
            <PriceHighlight variant="outcome">-R$ 59,00</PriceHighlight>
          </td>
          <td>Alimentação</td>
          <td>10/08/2022</td>
        </tr>
      </tbody>
    </TableContainer>
  )
}
