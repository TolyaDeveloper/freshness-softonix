const currencyParser = (price: number) => {
  return new Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'code'
  }).format(price)
}

export const allFilters = {
  currencyParser
}
