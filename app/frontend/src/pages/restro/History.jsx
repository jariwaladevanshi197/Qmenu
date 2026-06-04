import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { PageLoader } from '../../components/ui/Spinner';
import { ChevronDown, ChevronUp, Printer } from 'lucide-react';

export default function RestroHistory() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [expanded, setExpanded] = useState(null);

  const { data: history = [], isLoading } = useQuery({
    queryKey: ['order-history', from, to],
    queryFn: () => api.get('/orders/history', { params: { from, to } }).then((r) => r.data),
  });

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Order History</h1>

      <div className="card p-4 mb-5 flex flex-wrap gap-3 items-end">
        <div><label className="label">From</label><input className="input w-40" type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></div>
        <div><label className="label">To</label><input className="input w-40" type="date" value={to} onChange={(e) => setTo(e.target.value)} /></div>
        <button className="btn-secondary" onClick={() => { setFrom(''); setTo(''); }}>Clear</button>
      </div>

      <div className="space-y-3">
        {history.map((order) => (
          <div key={order.id} className="card overflow-hidden">
            <button className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors" onClick={() => setExpanded(expanded === order.id ? null : order.id)}>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium text-gray-900">{order.customername || 'Guest'} {order.tablename ? `· ${order.tablename}` : ''}</p>
                  <p className="text-xs text-gray-400">{order.ordercode} · {new Date(order.timestamp).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-gray-900">₹{order.grandtotal}</p>
                <button className="btn-secondary btn-sm p-1.5" title="Print Invoice"
                  onClick={(e) => { e.stopPropagation(); navigate(`/restro/invoice/${order.id}`); }}>
                  <Printer size={13} />
                </button>
                {expanded === order.id ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
              </div>
            </button>
            {expanded === order.id && (
              <div className="border-t border-gray-100 px-5 py-4">
                <table className="w-full text-sm">
                  <thead><tr className="text-gray-400 border-b border-gray-100">
                    <th className="pb-2 text-left font-medium">Item</th>
                    <th className="pb-2 text-right font-medium">Qty</th>
                    <th className="pb-2 text-right font-medium">Price</th>
                  </tr></thead>
                  <tbody>
                    {order.items.map((item) => (
                      <tr key={item.id} className="border-b border-gray-50">
                        <td className="py-1.5 text-gray-700">{item.name_eng}</td>
                        <td className="py-1.5 text-right text-gray-600">{item.quantity}</td>
                        <td className="py-1.5 text-right text-gray-700">₹{item.totalprice}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={2} className="pt-2 text-right text-gray-500">Subtotal</td>
                      <td className="pt-2 text-right font-medium">₹{order.subtotal}</td>
                    </tr>
                    {order.discount > 0 && <tr><td colSpan={2} className="text-right text-gray-500">Discount</td><td className="text-right text-green-600">-₹{order.discount}</td></tr>}
                    {order.servicecharge > 0 && <tr><td colSpan={2} className="text-right text-gray-500">Service Charge</td><td className="text-right">₹{order.servicecharge}</td></tr>}
                    <tr><td colSpan={2} className="text-right font-bold text-gray-900 pt-1">Grand Total</td><td className="text-right font-bold text-primary-600 pt-1">₹{order.grandtotal}</td></tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
        {!history.length && <p className="text-center py-10 text-gray-400">No orders in this period</p>}
      </div>
    </div>
  );
}
