import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/auth';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import { PageLoader } from '../../components/ui/Spinner';
import { CheckCircle, XCircle, Check, Merge, Plus, X, Printer } from 'lucide-react';
import Modal from '../../components/ui/Modal';
import { subscribeToOrders } from '../../lib/realtime';
import { printKitchenTicket } from '../../lib/printKitchenTicket';

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
  const [newOrderOpen, setNewOrderOpen] = useState(false);
  const [newOrderForm, setNewOrderForm] = useState({ tableid: '', customername: '', customermob: '', items: [] });
  const [itemSearch, setItemSearch] = useState('');
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
    if (!user?.id) return;
    return subscribeToOrders(
      user.id,
      () => qc.invalidateQueries(['active-orders']),
      () => qc.invalidateQueries(['active-orders'])
    );
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

  const markPaidMutation = useMutation({
    mutationFn: (id) => api.patch(`/orders/${id}/mark-paid`),
    onSuccess: () => { qc.invalidateQueries(['active-orders']); toast.success('Marked as paid'); },
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

  const staffOrderMutation = useMutation({
    mutationFn: (data) => api.post('/staff-order', data),
    onSuccess: () => {
      qc.invalidateQueries(['active-orders']);
      toast.success('Order placed!');
      setNewOrderOpen(false);
      setNewOrderForm({ tableid: '', customername: '', customermob: '', items: [] });
      setItemSearch('');
    },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const { data: allMenuItems = [] } = useQuery({
    queryKey: ['items'],
    queryFn: () => api.get('/menu/items').then((r) => r.data),
    enabled: newOrderOpen,
  });

  const addToNewOrder = (item) => {
    setNewOrderForm((prev) => {
      const exists = prev.items.find((i) => i.menuitemid === item.id);
      if (exists) return { ...prev, items: prev.items.map((i) => i.menuitemid === item.id ? { ...i, quantity: i.quantity + 1 } : i) };
      return { ...prev, items: [...prev.items, { menuitemid: item.id, name_eng: item.name_eng, price: item.price, quantity: 1 }] };
    });
  };

  const removeFromNewOrder = (menuitemid) =>
    setNewOrderForm((prev) => ({ ...prev, items: prev.items.filter((i) => i.menuitemid !== menuitemid) }));

  const newOrderTotal = newOrderForm.items.reduce((s, i) => s + i.price * i.quantity, 0);

  const submitNewOrder = () => {
    if (!newOrderForm.items.length) return toast.error('Add at least one item');
    staffOrderMutation.mutate({
      tableid: newOrderForm.tableid || null,
      customername: newOrderForm.customername,
      customermob: newOrderForm.customermob,
      items: newOrderForm.items.map(({ menuitemid, quantity }) => ({ menuitemid, quantity })),
    });
  };

  const filteredMenuItems = allMenuItems.filter((i) =>
    !itemSearch || i.name_eng.toLowerCase().includes(itemSearch.toLowerCase())
  );

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
        <div className="flex gap-2">
          {selected.length >= 2 && (
            <button className="btn-secondary" onClick={() => mergeMutation.mutate(selected)} disabled={mergeMutation.isPending}>
              <Merge size={15} /> Merge {selected.length}
            </button>
          )}
          <button className="btn-primary" onClick={() => setNewOrderOpen(true)}>
            <Plus size={15} /> New Order
          </button>
        </div>
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
                <div className="flex flex-col items-end gap-1">
                  <span className={STATUS_BADGE[order.status]}>{order.status}</span>
                  {order.paymentmethod === 'UPI' && (
                    <span className={order.paymentstatus === 'PAID' ? 'badge-green' : 'badge-yellow'}>
                      {order.paymentstatus === 'PAID' ? 'UPI: Paid' : 'UPI: Pending'}
                    </span>
                  )}
                </div>
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
                <button className="btn-secondary btn-sm px-3"
                  onClick={() => printKitchenTicket(order, user?.restroname)}
                  title="Print kitchen ticket">
                  <Printer size={14} />
                </button>
                {order.paymentmethod === 'UPI' && order.paymentstatus === 'UNPAID' && (
                  <button className="btn-secondary btn-sm flex-1"
                    onClick={() => markPaidMutation.mutate(order.id)}
                    disabled={markPaidMutation.isPending}>
                    Mark Paid
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

      {/* ── New Order Modal (Staff) ── */}
      <Modal open={newOrderOpen} onClose={() => setNewOrderOpen(false)} title="New Order — Staff" size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Left: Customer + Table */}
          <div className="space-y-4">
            <div>
              <label className="label">Table</label>
              <select className="input" value={newOrderForm.tableid} onChange={(e) => setNewOrderForm({ ...newOrderForm, tableid: e.target.value })}>
                <option value="">No Table / Walk-in</option>
                {tables.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Customer Name <span className="text-gray-400 text-xs">(optional)</span></label>
              <input className="input" placeholder="e.g. Rahul" value={newOrderForm.customername} onChange={(e) => setNewOrderForm({ ...newOrderForm, customername: e.target.value })} />
            </div>
            <div>
              <label className="label">Phone <span className="text-gray-400 text-xs">(optional)</span></label>
              <input className="input" placeholder="10-digit number" value={newOrderForm.customermob} onChange={(e) => setNewOrderForm({ ...newOrderForm, customermob: e.target.value })} />
            </div>

            {/* Order summary */}
            {newOrderForm.items.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Order Summary</p>
                {newOrderForm.items.map((item) => (
                  <div key={item.menuitemid} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{item.name_eng} × {item.quantity}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">₹{item.price * item.quantity}</span>
                      <button onClick={() => removeFromNewOrder(item.menuitemid)} className="text-red-400 hover:text-red-600"><X size={13} /></button>
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary-600">₹{newOrderTotal}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Item picker */}
          <div>
            <label className="label">Add Items</label>
            <input className="input mb-3" placeholder="Search items..." value={itemSearch} onChange={(e) => setItemSearch(e.target.value)} />
            <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
              {filteredMenuItems.map((item) => {
                const inOrder = newOrderForm.items.find((i) => i.menuitemid === item.id);
                return (
                  <div key={item.id} className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-50 border border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.name_eng}</p>
                      <p className="text-xs text-primary-600 font-semibold">₹{item.price}</p>
                    </div>
                    <button onClick={() => addToNewOrder(item)}
                      className="btn-primary btn-sm text-xs px-3">
                      {inOrder ? `+1 (${inOrder.quantity})` : '+ Add'}
                    </button>
                  </div>
                );
              })}
              {!filteredMenuItems.length && <p className="text-center text-gray-400 py-6 text-sm">No items found</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-5 border-t border-gray-100 pt-4">
          <button className="btn-secondary" onClick={() => setNewOrderOpen(false)}>Cancel</button>
          <button className="btn-primary" onClick={submitNewOrder} disabled={staffOrderMutation.isPending || !newOrderForm.items.length}>
            {staffOrderMutation.isPending ? 'Placing...' : `Place Order · ₹${newOrderTotal}`}
          </button>
        </div>
      </Modal>
    </div>
  );
}
