// PrintNode auto-print for kitchen receipts.
// Set PRINTNODE_API_KEY and PRINTNODE_PRINTER_ID in backend .env to activate.
// If not set, silently skips — system works normally without a printer.

export async function printKitchenOrder(order, restro = {}) {
  const apiKey    = restro.printNodeApiKey    || process.env.PRINTNODE_API_KEY;
  const printerId = restro.printNodePrinterId || process.env.PRINTNODE_PRINTER_ID;
  if (!apiKey || !printerId) return;

  const divider = '================================';
  const thin    = '--------------------------------';
  const center  = (str, w = 32) => str.padStart(Math.floor((w + str.length) / 2)).padEnd(w);

  const lines = [
    divider,
    center('KITCHEN TICKET'),
    divider,
    `Order : #${order.orderNumber}`,
    `Table : ${order.table?.name || 'Walk-in'}`,
    `Time  : ${new Date(order.createdAt || Date.now()).toLocaleString('en-IN')}`,
    thin,
    ...order.items.map((i) => `  ${String(i.quantity).padEnd(3)} x  ${i.name_eng}`),
    thin,
    center('-- KITCHEN COPY --'),
    divider,
    '',
    '',
    '',
  ];

  const content = Buffer.from(lines.join('\n'), 'utf-8').toString('base64');

  try {
    const res = await fetch('https://api.printnode.com/printjobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
      },
      body: JSON.stringify({
        printer: parseInt(printerId),
        title: `Kitchen - #${order.orderNumber}`,
        contentType: 'raw_base64',
        content,
        source: 'QMenu',
      }),
    });
    if (!res.ok) console.error('PrintNode error:', await res.text());
  } catch (e) {
    console.error('PrintNode unreachable:', e.message);
  }
}
