import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { useCartStore } from '../../store/cart';
import { useTheme } from '../../hooks/useTheme';
import toast from 'react-hot-toast';
import { PageLoader } from '../../components/ui/Spinner';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

export default function CustomerCart() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const tableid = searchParams.get('table');
  const navigate = useNavigate();
  const [form, setForm] = useState({ customername: '', customermob: '' });
  const [placing, setPlacing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('COUNTER');
  const { items, updateQty, removeItem, clearCart, total } = useCartStore();

  const { data: restro } = useQuery({
    queryKey: ['customer-restro', slug],
    queryFn: () => api.get(`/customer/restro/${slug}`).then((r) => r.data),
  });

  const th = useTheme(restro?.theme);

  const placeOrder = async () => {
    if (!form.customername.trim()) return toast.error('Please enter your name');
    if (!items.length) return toast.error('Cart is empty');
    setPlacing(true);
    try {
      const { data } = await api.post(`/customer/restro/${slug}/order`, {
        tableid,
        customername: form.customername,
        customermob: form.customermob,
        items: items.map((i) => ({ menuitemid: i.menuitemid, quantity: i.quantity })),
        paymentmethod: paymentMethod,
      });
      clearCart();
      toast.success('Order placed!');
      navigate(`/menu/${slug}/order/${data.ordercode}`);
    } catch (e) {
      toast.error(e.response?.data?.error || 'Failed to place order');
    } finally { setPlacing(false); }
  };

  if (!restro) return <PageLoader />;

  const subtotal = total();
  const discount = restro.discount ? (subtotal * restro.discount) / 100 : 0;
  const sc = restro.servicecharge ? ((subtotal - discount) * restro.servicecharge) / 100 : 0;
  const grand = subtotal - discount + sc;

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: th.bg, fontFamily: `'${th.font}', sans-serif`, color: th.text }}>
      {/* Header */}
      <div className="sticky top-0 z-10 shadow-sm" style={{ backgroundColor: th.navBg }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2" style={{ borderRadius: th.radius, backgroundColor: `${th.text}08` }}>
            <ArrowLeft size={18} style={{ color: th.text }} />
          </button>
          <h1 className="font-bold" style={{ color: th.text }}>Your Cart</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4">
        {!items.length ? (
          <div className="text-center py-20">
            <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" style={{ color: th.primary }} />
            <p className="opacity-50 text-sm" style={{ color: th.text }}>Your cart is empty</p>
            <button className="mt-4 px-5 py-2.5 text-sm font-bold"
              style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: th.radius }}
              onClick={() => navigate(-1)}>
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.menuitemid} className="flex items-center gap-3 p-3 shadow-sm"
                  style={{ backgroundColor: th.card, borderRadius: th.radius }}>
                  <div className="flex-1">
                    <p className="font-semibold text-sm" style={{ color: th.text }}>{item.name_eng}</p>
                    <p className="text-sm font-bold mt-0.5" style={{ color: th.primary }}>₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 flex items-center justify-center" onClick={() => updateQty(item.menuitemid, item.quantity - 1)}
                      style={{ backgroundColor: `${th.text}10`, borderRadius: `calc(${th.radius} - 4px)` }}>
                      <Minus size={12} style={{ color: th.text }} />
                    </button>
                    <span className="w-5 text-center text-sm font-bold" style={{ color: th.text }}>{item.quantity}</span>
                    <button className="w-7 h-7 flex items-center justify-center" onClick={() => updateQty(item.menuitemid, item.quantity + 1)}
                      style={{ backgroundColor: th.primary, borderRadius: `calc(${th.radius} - 4px)` }}>
                      <Plus size={12} style={{ color: th.btnText }} />
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center ml-1" onClick={() => removeItem(item.menuitemid)}
                      style={{ backgroundColor: '#fee2e2', borderRadius: `calc(${th.radius} - 4px)` }}>
                      <Trash2 size={12} className="text-red-500" />
                    </button>
                  </div>
                  <p className="w-14 text-right font-bold text-sm" style={{ color: th.text }}>₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            {/* Bill summary */}
            <div className="p-4 mb-4 shadow-sm" style={{ backgroundColor: th.card, borderRadius: th.radius }}>
              <p className="font-bold mb-3" style={{ color: th.text }}>Bill Summary</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="opacity-60" style={{ color: th.text }}>Subtotal</span><span style={{ color: th.text }}>₹{subtotal.toFixed(2)}</span></div>
                {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount ({restro.discount}%)</span><span>-₹{discount.toFixed(2)}</span></div>}
                {sc > 0 && <div className="flex justify-between"><span className="opacity-60" style={{ color: th.text }}>Service ({restro.servicecharge}%)</span><span style={{ color: th.text }}>₹{sc.toFixed(2)}</span></div>}
                <div className="flex justify-between font-bold pt-2" style={{ borderTop: `1px solid ${th.text}10` }}>
                  <span style={{ color: th.text }}>Total</span>
                  <span style={{ color: th.primary }}>₹{grand.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment method */}
            {restro.upiId && (
              <div className="p-4 mb-4 shadow-sm" style={{ backgroundColor: th.card, borderRadius: th.radius }}>
                <p className="font-bold mb-3" style={{ color: th.text }}>Payment</p>
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={() => setPaymentMethod('COUNTER')}
                    className="py-2.5 text-sm font-semibold border"
                    style={{
                      borderRadius: th.radius,
                      borderColor: paymentMethod === 'COUNTER' ? th.primary : `${th.text}15`,
                      backgroundColor: paymentMethod === 'COUNTER' ? `${th.primary}15` : 'transparent',
                      color: th.text,
                    }}>
                    Pay at Counter
                  </button>
                  <button type="button" onClick={() => setPaymentMethod('UPI')}
                    className="py-2.5 text-sm font-semibold border"
                    style={{
                      borderRadius: th.radius,
                      borderColor: paymentMethod === 'UPI' ? th.primary : `${th.text}15`,
                      backgroundColor: paymentMethod === 'UPI' ? `${th.primary}15` : 'transparent',
                      color: th.text,
                    }}>
                    Pay via UPI
                  </button>
                </div>
              </div>
            )}

            {/* Customer details */}
            <div className="p-4 mb-4 shadow-sm" style={{ backgroundColor: th.card, borderRadius: th.radius }}>
              <p className="font-bold mb-3" style={{ color: th.text }}>Your Details</p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium opacity-60 mb-1 block" style={{ color: th.text }}>Name *</label>
                  <input className="w-full px-3 py-2.5 text-sm outline-none border" placeholder="Your name"
                    value={form.customername} onChange={(e) => setForm({ ...form, customername: e.target.value })}
                    style={{ backgroundColor: `${th.text}06`, borderColor: `${th.text}15`, borderRadius: th.radius, color: th.text }} />
                </div>
                <div>
                  <label className="text-xs font-medium opacity-60 mb-1 block" style={{ color: th.text }}>Mobile (optional)</label>
                  <input className="w-full px-3 py-2.5 text-sm outline-none border" placeholder="Your mobile"
                    value={form.customermob} onChange={(e) => setForm({ ...form, customermob: e.target.value })}
                    style={{ backgroundColor: `${th.text}06`, borderColor: `${th.text}15`, borderRadius: th.radius, color: th.text }} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-3 z-10" style={{ backgroundColor: th.navBg, borderTop: `1px solid ${th.primary}20` }}>
          <div className="max-w-2xl mx-auto">
            <button className="w-full py-3 text-sm font-bold shadow-lg"
              style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: th.radius }}
              onClick={placeOrder} disabled={placing}>
              {placing ? 'Placing Order...' : `Place Order · ₹${grand.toFixed(2)}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
