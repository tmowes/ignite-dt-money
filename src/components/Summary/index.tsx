import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { currencyBRLFormat } from '../../utils/currencyBRLFormat'
import { SummaryCard, SummaryContainer } from './styles'
import { useSummary } from './useSummary'

export function Summary() {
  const theme = useTheme()

  const { income, outcome, total } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>{currencyBRLFormat(income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>{currencyBRLFormat(outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>{currencyBRLFormat(total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
