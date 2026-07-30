import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { useTheme } from '../../hooks/useTheme';
import { PageLoader } from '../../components/ui/Spinner';
import { buildUpiAppLinks } from '../../lib/upi';
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

  const upiAppLinks = (order && restro?.upiId)
    ? buildUpiAppLinks({
        upiId: restro.upiId,
        payeeName: restro.restroname,
        amount: Number(order.grandtotal).toFixed(2),
        note: `Order ${order.ordercode}`,
        tr: order.ordercode,
      })
    : [];

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

        {/* UPI payment status */}
        {order.paymentmethod === 'UPI' && (
          <div className="p-4 shadow-sm text-center" style={{ backgroundColor: th.card, borderRadius: th.radius }}>
            {order.paymentstatus === 'PAID' ? (
              <p className="font-bold text-green-600">✓ Paid via UPI</p>
            ) : (
              <>
                <p className="font-bold mb-1 text-amber-600">⏳ Payment Verification Pending</p>
                <p className="text-xs opacity-60 mb-3" style={{ color: th.text }}>
                  Staff will verify your UPI payment and confirm the order shortly.
                </p>
                {order.utrnumber && (
                  <div className="flex items-center justify-between gap-2 px-3 py-2"
                    style={{ backgroundColor: `${th.text}08`, borderRadius: th.radius }}>
                    <div className="text-left">
                      <p className="text-[10px] opacity-50 uppercase font-semibold" style={{ color: th.text }}>UTR / Transaction ID</p>
                      <p className="text-sm font-bold font-mono" style={{ color: th.text }}>{order.utrnumber}</p>
                    </div>
                    <button onClick={() => { navigator.clipboard.writeText(order.utrnumber); toast.success('UTR copied'); }}
                      className="p-2" style={{ backgroundColor: `${th.text}10`, borderRadius: th.radius }}>
                      <Copy size={14} style={{ color: th.text }} />
                    </button>
                  </div>
                )}
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
