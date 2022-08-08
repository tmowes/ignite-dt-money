export const datePtBRFormatter = (date?: number | Date) =>
  new Intl.DateTimeFormat('pt-BR').format(date)
