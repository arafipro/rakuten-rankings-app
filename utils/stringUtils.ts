export function toLocaleString(price: number) {
  const formattedNumber = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber;
}
