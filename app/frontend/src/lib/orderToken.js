// Display token for an order. Uses the per-restaurant sequential orderNumber
// when available; falls back to the tail of ordercode for legacy orders
// (created before orderNumber was introduced) where it defaults to 0.
export const formatOrderToken = (order) => {
  if (order?.orderNumber) return order.orderNumber;
  return order?.ordercode?.slice(-4) || '?';
};
