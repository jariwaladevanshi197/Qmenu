import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuthStore } from '../../store/auth';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import { PageLoader } from '../../components/ui/Spinner';
import { CheckCircle, XCircle, Check, Merge, Filter } from 'lucide-react';

const STATUS_BADGE = {
  PENDING:   'badge-yellow',
  CONFIRMED: 'badge-blue',
  COMPLETED: 'badge-green',
  CANCELLED: 'badge-red',
};

const TABS = [
  { key: 'ALL',       label: 'All' },
  { key: 'PENDING',   label: 'Pending' },
  { key: 'CONFIRMED', label: 'Confirmed' },
];

export default function RestroOrders() {
  const qc = useQueryClient();
  const { user } = useAuthStore();
  const [selected, setSelected] = useState([]);
  const [tab, setTab] = useState('ALL');
  const [tableFilter, setTableFilter] = useState('');

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['active-orders'],
    queryFn: () => api.get('/orders/active').then((r) => r.data),
    refetchInterval: 10000,
  });

  const { data: tables = [] } = useQuery({
    queryKey: ['tables'],
    queryFn: () => api.get('/menu/tables').then((r) => r.data),
  });

  useEffect(() => {
    const socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000');
    socket.emit('join:restro', user?.id);
    socket.on('order:new', () => qc.invalidateQueries(['active-orders']));
    socket.on('order:updated', () => qc.invalidateQueries(['active-orders']));
    return () => socket.disconnect();
  }, [user?.id, qc]);

  const confirmMutation = useMutation({
    mutationFn: (id) => api.patch(`/orders/${id}/confirm`),
    onSuccess: () => { qc.invalidateQueries(['active-orders']); toast.success('Order confirmed'); },
  });

  const completeMutation = useMutation({
    mutationFn: (id) => api.patch(`/orders/${id}/complete`),
    onSuccess: () => { qc.invalidateQueries(['active-orders']); toast.success('Order completed ✓'); },
  });

  const cancelMutation = useMutation({
    mutationFn: (id) => api.patch(`/orders/${id}/cancel`),
    onSuccess: () => { qc.invalidateQueries(['active-orders']); toast.success('Order cancelled'); },
  });

  const mergeMutation = useMutation({
    mutationFn: (ids) => api.post('/orders/merge', { orderIds: ids }),
    onSuccess: () => {
      qc.invalidateQueries(['active-orders']);
      setSelected([]);
      toast.success('Orders merged successfully!');
    },
    onError: (e) => toast.error(e.response?.data?.error || 'Merge failed'),
  });

  // Filter orders
  const filtered = orders.filter((o) => {
    if (tab !== 'ALL' && o.status !== tab) return false;
    if (tableFilter && String(o.tableid) !== tableFilter) return false;
    return true;
  });

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const pendingCount   = orders.filter((o) => o.status === 'PENDING').length;
  const confirmedCount = orders.filter((o) => o.status === 'CONFIRMED').length;

  if (isLoading) return <PageLoader />;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Live Orders</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {pendingCount} pending · {confirmedCount} in progress
          </p>
        </div>
        {selected.length >= 2 && (
          <button className="btn-primary" onClick={() => mergeMutation.mutate(selected)} disabled={mergeMutation.isPending}>
            <Merge size={15} /> Merge {selected.length} Orders
          </button>
        )}
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap gap-3 mb-5">
        {/* Status tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
          {TABS.map(({ key, label }) => (
            <button key={key} onClick={() => setTab(key)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${tab === key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              {label}
              {key === 'PENDING' && pendingCount > 0 && (
                <span className="ml-1.5 w-4 h-4 bg-yellow-400 text-white text-xs rounded-full inline-flex items-center justify-center">{pendingCount}</span>
              )}
              {key === 'CONFIRMED' && confirmedCount > 0 && (
                <span className="ml-1.5 w-4 h-4 bg-blue-400 text-white text-xs rounded-full inline-flex items-center justify-center">{confirmedCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* Table filter */}
        {tables.length > 0 && (
          <select className="input w-40 text-sm" value={tableFilter} onChange={(e) => setTableFilter(e.target.value)}>
            <option value="">All Tables</option>
            {tables.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        )}

        {/* Merge hint */}
        {selected.length === 1 && (
          <p className="text-xs text-gray-400 self-center">Select one more order to merge</p>
        )}
      </div>

      {/* Empty state */}
      {!filtered.length && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🍽️</p>
          <p className="text-lg font-medium text-gray-500">No active orders</p>
          <p className="text-sm mt-1">New orders will appear here in real-time</p>
        </div>
      )}

      {/* Order cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((order) => {
          const isSelected = selected.includes(order.id);
          const orderTotal = order.items.reduce((s, i) => s + i.totalprice, 0);

          return (
            <div key={order.id}
              className={`card p-4 transition-all ${isSelected ? 'ring-2 ring-primary-400 shadow-md' : ''}`}>
              {/* Card header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-2">
                  {/* Merge checkbox */}
                  <input type="checkbox" checked={isSelected}
                    onChange={() => toggleSelect(order.id)}
                    className="mt-1 accent-primary-500 w-4 h-4 cursor-pointer rounded"
                    title="Select to merge" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {order.table?.name || <span className="text-gray-400 text-sm">No Table</span>}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {order.customername || 'Guest'} · {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                <span className={STATUS_BADGE[order.status]}>{order.status}</span>
              </div>

              {/* Items list */}
              <div className="space-y-1 mb-3 bg-gray-50 rounded-lg p-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">{item.name_eng} × {item.quantity}</span>
                    <span className="text-gray-500 font-medium">₹{item.totalprice}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center text-sm mb-3 border-t border-gray-100 pt-2">
                <span className="text-gray-500">Total</span>
                <span className="font-bold text-gray-900 text-base">₹{orderTotal}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                {order.status === 'PENDING' && (
                  <button className="btn-primary btn-sm flex-1"
                    onClick={() => confirmMutation.mutate(order.id)}
                    disabled={confirmMutation.isPending}>
                    <CheckCircle size={13} /> Confirm
                  </button>
                )}
                {order.status === 'CONFIRMED' && (
                  <button className="btn-primary btn-sm flex-1"
                    onClick={() => completeMutation.mutate(order.id)}
                    disabled={completeMutation.isPending}>
                    <Check size={13} /> Complete
                  </button>
                )}
                <button className="btn-danger btn-sm px-3"
                  onClick={() => cancelMutation.mutate(order.id)}
                  disabled={cancelMutation.isPending}
                  title="Cancel order">
                  <XCircle size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
