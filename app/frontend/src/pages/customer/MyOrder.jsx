import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import QRCode from 'qrcode';
import api from '../../lib/api';
import { useTheme } from '../../hooks/useTheme';
import { PageLoader } from '../../components/ui/Spinner';
import { buildUpiLink, buildUpiAppLinks } from '../../lib/upi';
import { formatOrderToken } from '../../lib/orderToken';
import toast from 'react-hot-toast';
import { CheckCircle, Clock, XCircle, ArrowLeft, Copy } from 'lucide-react';

const STATUS = {
  PENDING:   { label: 'Order Received',  icon: Clock,        color: '#d97706', bg: '#fef3c7' },
  CONFIRMED: { label: 'Being Prepared',  icon: CheckCircle,  color: '#2563eb', bg: '#dbeafe' },
  COMPLETED: { label: '🎉 Order Ready!', icon: CheckCircle,  color: '#16a34a', bg: '#dcfce7' },
  CANCELLED: { label: 'Cancelled',       icon: XCircle,      color: '#dc2626', bg: '#fee2e2' },
};

export default function CustomerMyOrder() {
  const { slug, ordercode } = useParams();
  const navigate = useNavigate();

  const { data: restro } = useQuery({
    queryKey: ['customer-restro', slug],
    queryFn: () => api.get(`/customer/restro/${slug}`).then((r) => r.data),
  });

  const { data: order, isLoading } = useQuery({
    queryKey: ['my-order', ordercode],
    queryFn: () => api.get(`/customer/restro/${slug}/order/${ordercode}`).then((r) => r.data),
    refetchInterval: 15000,
  });

  const th = useTheme(restro?.theme);

  const upiLink = (order && restro?.upiId)
    ? buildUpiLink({
        upiId: restro.upiId,
        payeeName: restro.restroname,
        amount: order.grandtotal,
        note: `Order ${order.ordercode}`,
      })
    : null;

  const upiAppLinks = (order && restro?.upiId)
    ? buildUpiAppLinks({
        upiId: restro.upiId,
        payeeName: restro.restroname,
        amount: order.grandtotal,
        note: `Order ${order.ordercode}`,
      })
    : [];

  const [qrDataUrl, setQrDataUrl] = useState(null);
  useEffect(() => {
    if (!upiLink) { setQrDataUrl(null); return; }
    QRCode.toDataURL(upiLink, { width: 220, margin: 1 }).then(setQrDataUrl).catch(() => setQrDataUrl(null));
  }, [upiLink]);

  if (isLoading) return <PageLoader />;
  if (!order) return <div className="flex items-center justify-center min-h-screen">Order not found</div>;

  const s = STATUS[order.status] || STATUS.PENDING;
  const Icon = s.icon;
  const orderTotal = order.items.reduce((sum, i) => sum + i.totalprice, 0);
  const backToMenuUrl = `/menu/${slug}${order.table?.tableNumber ? `?table=${order.table.tableNumber}` : ''}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: th.bg, fontFamily: `'${th.font}', sans-serif` }}>
      {/* Header */}
      <div className="sticky top-0 z-10 shadow-sm" style={{ backgroundColor: th.navBg }}>
        <div className="max-w-md lg:max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(backToMenuUrl)} className="p-2" style={{ backgroundColor: `${th.text}08`, borderRadius: th.radius }}>
            <ArrowLeft size={18} style={{ color: th.text }} />
          </button>
          <h1 className="font-bold" style={{ color: th.text }}>My Order</h1>
        </div>
      </div>

      <div className="max-w-md lg:max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Status card */}
        <div className="p-6 text-center shadow-sm" style={{ backgroundColor: s.bg, borderRadius: th.radius }}>
          <Icon size={44} className="mx-auto mb-3" style={{ color: s.color }} />
          <p className="text-lg font-bold" style={{ color: s.color }}>{s.label}</p>
          {order.table?.name && <p className="text-sm mt-1 opacity-70" style={{ color: s.color }}>Table: {order.table.name}</p>}
          {order.status === 'COMPLETED' && (
            <div className="mt-4 p-4 rounded-xl bg-green-600 text-white">
              <p className="text-xl font-black">#{formatOrderToken(order)}</p>
              <p className="text-sm font-semibold mt-1">Please collect your order from the counter</p>
            </div>
          )}
        </div>

        {/* Order details */}
        <div className="p-4 shadow-sm" style={{ backgroundColor: th.card, borderRadius: th.radius }}>
          <p className="text-xs opacity-50 mb-3 font-mono" style={{ color: th.text }}>#{formatOrderToken(order)}</p>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span style={{ color: th.text }}>{item.name_eng} × {item.quantity}</span>
                <span className="font-medium" style={{ color: th.text }}>₹{item.totalprice}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold pt-2" style={{ borderTop: `1px solid ${th.text}10` }}>
              <span style={{ color: th.text }}>Total</span>
              <span style={{ color: th.primary }}>₹{orderTotal}</span>
            </div>
          </div>
        </div>

        {/* UPI payment */}
        {order.paymentmethod === 'UPI' && (
          <div className="p-4 shadow-sm text-center" style={{ backgroundColor: th.card, borderRadius: th.radius }}>
            {order.paymentstatus === 'PAID' ? (
              <p className="font-bold text-green-600">✓ Paid via UPI</p>
            ) : (
              <>
                <p className="font-bold mb-1" style={{ color: th.text }}>Complete Your Payment</p>
                <p className="text-xs opacity-60 mb-3" style={{ color: th.text }}>
                  Pay ₹{order.grandtotal?.toFixed(2)} via UPI. Staff will confirm once received.
                </p>

                {restro.upiQrImage ? (
                  <>
                    <img src={restro.upiQrImage} alt="UPI QR" className="mx-auto mb-3 rounded-lg" width={220} height={220} style={{ objectFit: 'contain' }} />
                    <p className="text-xs opacity-60 mb-3" style={{ color: th.text }}>
                      Open any UPI app, scan this QR, and enter ₹{order.grandtotal?.toFixed(2)} to pay.
                    </p>
                  </>
                ) : (
                  <>
                    {/* Choose UPI app */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {upiAppLinks.map((app) => (
                        <a key={app.name} href={app.href}
                          className="py-2.5 text-sm font-semibold border text-center"
                          style={{
                            borderRadius: th.radius,
                            borderColor: `${th.text}15`,
                            backgroundColor: app.color,
                            color: app.textColor,
                          }}>
                          {app.name}
                        </a>
                      ))}
                    </div>

                    {qrDataUrl && (
                      <img src={qrDataUrl} alt="UPI QR" className="mx-auto mb-3 rounded-lg" width={180} height={180} />
                    )}
                    <p className="text-xs opacity-60 mb-3" style={{ color: th.text }}>
                      Tap an app above, scan the QR, or pay manually using the details below.
                    </p>
                  </>
                )}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between gap-2 px-3 py-2"
                    style={{ backgroundColor: `${th.text}08`, borderRadius: th.radius }}>
                    <div className="text-left">
                      <p className="text-[10px] opacity-50 uppercase font-semibold" style={{ color: th.text }}>UPI ID</p>
                      <p className="text-sm font-bold" style={{ color: th.text }}>{restro.upiId}</p>
                    </div>
                    <button onClick={() => { navigator.clipboard.writeText(restro.upiId); toast.success('UPI ID copied'); }}
                      className="p-2" style={{ backgroundColor: `${th.text}10`, borderRadius: th.radius }}>
                      <Copy size={14} style={{ color: th.text }} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-3 py-2"
                    style={{ backgroundColor: `${th.text}08`, borderRadius: th.radius }}>
                    <div className="text-left">
                      <p className="text-[10px] opacity-50 uppercase font-semibold" style={{ color: th.text }}>Amount</p>
                      <p className="text-sm font-bold" style={{ color: th.text }}>₹{order.grandtotal?.toFixed(2)}</p>
                    </div>
                    <button onClick={() => { navigator.clipboard.writeText(String(order.grandtotal)); toast.success('Amount copied'); }}
                      className="p-2" style={{ backgroundColor: `${th.text}10`, borderRadius: th.radius }}>
                      <Copy size={14} style={{ color: th.text }} />
                    </button>
                  </div>
                </div>
                <p className="text-xs mt-2 font-semibold" style={{ color: '#d97706' }}>Payment Pending</p>
              </>
            )}
          </div>
        )}

        {/* Refresh note */}
        <p className="text-xs text-center opacity-40" style={{ color: th.text }}>Status updates automatically every 15s</p>

        <button className="w-full py-3 text-sm font-bold"
          style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: th.radius }}
          onClick={() => navigate(backToMenuUrl)}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}
