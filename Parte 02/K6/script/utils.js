export function generateUniqueTitle() {
  return `product-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}