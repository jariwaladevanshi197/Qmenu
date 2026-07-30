// UPI Intent link builder.
// Spec reference: NPCI "UPI Linking Specification" (upi://pay deep-link params).
//
// Required/known params:
//   pa  -> payee VPA (merchant UPI ID)        REQUIRED
//   pn  -> payee name                          REQUIRED
//   am  -> amount (decimal string, 2 dp)       optional but needed for prefilled amount
//   cu  -> currency (always INR)               REQUIRED when am is present
//   tn  -> transaction note                    optional
//   tr  -> transaction reference id (unique)   REQUIRED for merchant/collect flows in GPay
//   mc  -> merchant category code (4 digits)   optional
//   mode/purpose/orgid -> optional GPay hints

// Percent-encode a value for use inside the UPI query string.
// NOTE: encoding '@' as %40 in `pa` is 100% valid per RFC 3986 and every
// UPI PSP (GPay/PhonePe/Paytm) decodes it correctly. The earlier belief that
// %40 "breaks VPA lookup" was a misdiagnosis. We still keep `pa` raw here only
// for readability; both forms work.
function enc(v) {
  return encodeURIComponent(String(v ?? '').trim());
}

// Amount must be a plain decimal string with exactly 2 decimal places,
// no thousands separators, no currency symbol, no spaces.
function formatAmount(amount) {
  const n = Number(String(amount).replace(/[^0-9.]/g, ''));
  if (!Number.isFinite(n) || n <= 0) return null;
  return n.toFixed(2);
}

// Generate a unique, alphanumeric transaction reference (<=35 chars, no spaces).
function makeTr(seed) {
  const base = (seed ? String(seed) : '') + Date.now().toString(36);
  return base.replace(/[^a-zA-Z0-9]/g, '').slice(-35) || `QM${Date.now()}`;
}

function buildParams({ upiId, payeeName, amount, note, tr, mc }) {
  const paRaw = String(upiId ?? '').trim();
  const am = formatAmount(amount);
  const txnRef = (tr && String(tr).replace(/[^a-zA-Z0-9]/g, '')) || makeTr(note);

  const parts = [
    `pa=${paRaw}`,                 // merchant VPA — must be the MERCHANT id, never the payer
    `pn=${enc(payeeName)}`,
  ];
  if (am) {
    parts.push(`am=${am}`);
    parts.push(`cu=INR`);
  }
  if (note) parts.push(`tn=${enc(note)}`);
  parts.push(`tr=${txnRef}`);       // required for GPay merchant intent
  if (mc) parts.push(`mc=${enc(mc)}`);

  const query = parts.join('&');

  // ---- DEBUG LOGGING (dev only) ----
  const DEBUG = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
  if (DEBUG && typeof console !== 'undefined') {
    console.groupCollapsed('[UPI] intent built');
    console.log('original merchant upiId :', JSON.stringify(upiId));
    console.log('trimmed  merchant upiId :', JSON.stringify(paRaw));
    console.log('payeeName               :', JSON.stringify(payeeName));
    console.log('amount (raw -> fmt)     :', JSON.stringify(amount), '->', am);
    console.log('note                    :', JSON.stringify(note));
    console.log('tr                      :', txnRef);
    console.log('query string            :', query);
    // Surface any hidden/invisible chars in the VPA
    const codepoints = [...paRaw].map((c) => c.codePointAt(0));
    const hasHidden = codepoints.some((cp) => cp < 0x20 || cp === 0x200b || cp === 0xfeff || cp > 0x7e);
    if (hasHidden) console.warn('⚠️  merchant VPA contains non-ASCII / hidden chars:', codepoints);
    console.groupEnd();
  }
  return query;
}

export function buildUpiLink(opts) {
  return `upi://pay?${buildParams(opts)}`;
}

export function buildUpiAppLinks(opts) {
  const params = buildParams(opts);

  // Android intent URL that targets Google Pay's package directly and falls
  // back to the store. This is the reliable way to open GPay for a merchant
  // intent — the legacy `tez://upi/pay` deep link is deprecated and is the
  // usual cause of GPay's "User's UPI ID or VPA is not available" error.
  const gpayIntent =
    `intent://upi/pay?${params}#Intent;scheme=upi;` +
    `package=com.google.android.apps.nbu.paisa.user;end`;

  return [
    { name: 'Google Pay', color: '#ffffff', textColor: '#3c4043', href: gpayIntent },
    { name: 'PhonePe', color: '#5f259f', textColor: '#ffffff', href: `upi://pay?${params}` },
    { name: 'Paytm', color: '#00baf2', textColor: '#ffffff', href: `upi://pay?${params}` },
    { name: 'BHIM / Other UPI App', color: '#f3f4f6', textColor: '#374151', href: `upi://pay?${params}` },
  ];
}
