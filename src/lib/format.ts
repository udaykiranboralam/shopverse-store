export function formatPrice(amount: number): string {
  const formatted = amount.toLocaleString("en-IN", {
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  });
  return `₹${formatted}`;
}