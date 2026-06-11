function buildParams({ upiId, payeeName, amount, note }) {
  return new URLSearchParams({
    pa: upiId,
    pn: payeeName,
    am: amount,
    cu: 'INR',
    tn: note,
  }).toString();
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
