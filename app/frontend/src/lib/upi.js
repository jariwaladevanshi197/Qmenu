export function buildUpiLink({ upiId, payeeName, amount, note }) {
  const params = new URLSearchParams({
    pa: upiId,
    pn: payeeName,
    am: amount,
    cu: 'INR',
    tn: note,
  });
  return `upi://pay?${params.toString()}`;
}
