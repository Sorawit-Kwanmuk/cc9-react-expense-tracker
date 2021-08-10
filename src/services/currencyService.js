const formatThaiCurrency = number => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  }).format(number);
};

export { formatThaiCurrency };
