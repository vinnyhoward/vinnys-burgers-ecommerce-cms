const formatNumberToFiat = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const formatMoney = (cents) => formatNumberToFiat.format(cents / 100);

export default formatMoney;
