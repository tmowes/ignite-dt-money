import styled, { css } from 'styled-components'

import { PriceHighlightProps } from './types'

export const TableContainer = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    td {
      padding: 1.25rem 2rem;
      background: ${theme['gray-700']};
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
  `}
`
