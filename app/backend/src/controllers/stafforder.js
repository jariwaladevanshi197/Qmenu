import { PrismaClient } from '../generated/client/index.js';
import { emitNewOrder } from '../utils/realtime.js';
import { generateOrderCode } from '../utils/helpers.js';
import { printKitchenOrder } from '../utils/printOrder.js';

const prisma = new PrismaClient();

// Staff places order manually — can select table + add customer details
export const placeStaffOrder = async (req, res) => {
  try {
    const { tableid, customername, customermob, items } = req.body;
    if (!items?.length) return res.status(400).json({ error: 'No items provided' });

    // tableid here is the actual DB table id (staff selects from dropdown, not QR)
    const menuItems = await prisma.menuItem.findMany({
      where: { id: { in: items.map((i) => i.menuitemid) }, restroid: req.user.id },
    });

    const enriched = items.map((i) => {
      const mi = menuItems.find((m) => m.id === i.menuitemid);
      if (!mi) throw new Error(`Item ${i.menuitemid} not found`);
      return {
        menuitemid: mi.id, name_eng: mi.name_eng, name_guj: mi.name_guj,
        name_hindi: mi.name_hindi, price: mi.price, quantity: i.quantity,
        totalprice: mi.price * i.quantity,
      };
    });

    const order = await prisma.order.create({
      data: {
        restroid: req.user.id,
        tableid: tableid ? parseInt(tableid) : null,
        ordercode: generateOrderCode(),
        customername: customername || 'Walk-in Customer',
        customermob: customermob || null,
        status: 'CONFIRMED', // staff orders go straight to confirmed
        items: { create: enriched },
      },
      include: { items: true, table: true },
    });

    emitNewOrder(req.app.get('io'), req.user.id, order);
    prisma.restaurant.findUnique({
      where: { id: req.user.id },
      select: { printNodeApiKey: true, printNodePrinterId: true },
    }).then((restro) => printKitchenOrder(order, restro || {}));
    res.status(201).json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
