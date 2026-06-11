// Triggers browser print for a kitchen order ticket.
// Works on both desktop and mobile — mobile uses the OS print dialog
// which can send to any paired Bluetooth/WiFi thermal printer.

import { formatOrderToken } from './orderToken';

function buildReceiptHtml(order, restroName) {
  const items = (order.items || [])
    .map((i) => `<tr><td>${i.quantity} x</td><td>${i.name_eng}</td></tr>`)
    .join('');

  const time = new Date(order.createdAt || Date.now()).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Courier New', monospace; font-size: 13px; width: 300px; padding: 8px; }
  .center { text-align: center; }
  .bold   { font-weight: bold; }
  .big    { font-size: 18px; font-weight: bold; }
  .divider{ border-top: 1px dashed #000; margin: 6px 0; }
  table   { width: 100%; border-collapse: collapse; }
  td      { padding: 2px 0; vertical-align: top; }
  td:first-child { width: 36px; }
  .footer { text-align: center; margin-top: 8px; font-size: 11px; }
  @media print { @page { margin: 0; size: 80mm auto; } }
</style></head><body>
<p class="center bold">${restroName || 'KITCHEN TICKET'}</p>
<div class="divider"></div>
<p class="center big">#${formatOrderToken(order)}</p>
<p class="center">Table: ${order.table?.name || 'Walk-in'}</p>
<p class="center" style="font-size:11px;color:#555">${time}</p>
<div class="divider"></div>
<table>${items}</table>
<div class="divider"></div>
<p class="footer">— KITCHEN COPY —</p>
</body></html>`;
}

export function printKitchenTicket(order, restroName) {
  const html = buildReceiptHtml(order, restroName);

  // Use hidden iframe — prints without opening a new window.
  // On mobile, a print dialog appears (user taps the Bluetooth printer).
  const iframe = document.createElement('iframe');
  Object.assign(iframe.style, {
    position: 'fixed', top: '-9999px', left: '-9999px',
    width: '1px', height: '1px', border: 'none',
  });
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument;
  doc.open();
  doc.write(html);
  doc.close();

  // Small delay to let iframe render before printing
  setTimeout(() => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (_) {}
    setTimeout(() => document.body.removeChild(iframe), 3000);
  }, 300);
}
