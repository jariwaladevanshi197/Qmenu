function buildParams({ upiId, payeeName, amount, note }) {
  // URLSearchParams encodes '@' as '%40' which breaks UPI VPA lookup.
  // Build the query string manually: pa must never be percent-encoded,
  // pn/tn use encodeURIComponent (spaces → %20, not +).
  const pa = upiId.trim();
  const pn = encodeURIComponent(payeeName.trim());
  const tn = encodeURIComponent(note);
  // amount must be a plain decimal string — no encoding needed
  return `pa=${pa}&pn=${pn}&am=${amount}&cu=INR&tn=${tn}`;
}

export function buildUpiLink(opts) {
  return `upi://pay?${buildParams(opts)}`;
}

export function buildUpiAppLinks(opts) {
  const params = buildParams(opts);
  return [
    { name: 'Google Pay', color: '#ffffff', textColor: '#3c4043', href: `tez://upi/pay?${params}` },
    { name: 'PhonePe', color: '#5f259f', textColor: '#ffffff', href: `phonepe://pay?${params}` },
    { name: 'Paytm', color: '#00baf2', textColor: '#ffffff', href: `paytmmp://pay?${params}` },
    { name: 'BHIM / Other UPI App', color: '#f3f4f6', textColor: '#374151', href: `upi://pay?${params}` },
  ];
}
