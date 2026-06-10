import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../../store/auth';
import { subscribeToOrders } from '../../lib/realtime';
import { printKitchenTicket } from '../../lib/printKitchenTicket';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import { LogOut, ChefHat, Clock, Utensils, Printer } from 'lucide-react';

const timeAgo = (dateStr) => {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return `${Math.floor(diff / 3600)}h ago`;
};

function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export default function KitchenDisplay() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const clock = useClock();

  // Auto-print toggle — persisted in localStorage
  const [autoPrint, setAutoPrint] = useState(() => {
    try { return localStorage.getItem('kds_autoprint') !== 'off'; } catch { return true; }
  });
  const seenOrders = useRef(new Set());

  const toggleAutoPrint = () => {
    setAutoPrint((prev) => {
      const next = !prev;
      localStorage.setItem('kds_autoprint', next ? 'on' : 'off');
      toast(next ? 'Auto-print ON' : 'Auto-print OFF', { icon: '🖨️' });
      return next;
    });
  };

  useEffect(() => {
    if (user && user.staffRole && user.staffRole !== 'kitchen') {
      navigate('/restro/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['kitchen-orders'],
    queryFn: () => api.get('/orders/active').then((r) => r.data),
    refetchInterval: 10000,
    onSuccess: (data) => {
      // Seed seen set on first load so existing orders don't trigger print
      data.forEach((o) => seenOrders.current.add(o.id));
    },
  });

  // Real-time: new order → auto-print if enabled
  useEffect(() => {
    if (!user?.id) return;
    const unsub = subscribeToOrders(
      user.id,
      (newOrder) => {
        qc.invalidateQueries(['kitchen-orders']);
        if (autoPrint && !seenOrders.current.has(newOrder.id)) {
          seenOrders.current.add(newOrder.id);
          // Fetch full order (realtime payload may lack items/table)
          api.get('/orders/active').then((r) => {
            const full = r.data.find((o) => o.id === newOrder.id);
            if (full) printKitchenTicket(full, user.restroname);
          });
          toast('New order — printing ticket', { icon: '🖨️' });
        }
      },
      () => qc.invalidateQueries(['kitchen-orders']),
    );
    return unsub;
  }, [user?.id, user?.restroname, autoPrint, qc]);

  const confirmMutation = useMutation({
    mutationFn: (id) => api.patch(`/orders/${id}/confirm`),
    onSuccess: () => { qc.invalidateQueries(['kitchen-orders']); toast.success('Started preparing!', { icon: '🍳' }); },
    onError: () => toast.error('Failed to update order'),
  });

  const completeMutation = useMutation({
    mutationFn: (id) => api.patch(`/orders/${id}/complete`),
    onSuccess: () => { qc.invalidateQueries(['kitchen-orders']); toast.success('Order ready!', { icon: '✅' }); },
    onError: () => toast.error('Failed to update order'),
  });

  const handleLogout = useCallback(() => {
    logout();
    navigate('/restro/login');
  }, [logout, navigate]);

  const sorted = [...orders].sort((a, b) => {
    if (a.status === b.status) return new Date(a.createdAt) - new Date(b.createdAt);
    return a.status === 'PENDING' ? -1 : 1;
  });

  const pendingCount  = orders.filter((o) => o.status === 'PENDING').length;
  const preparingCount = orders.filter((o) => o.status === 'CONFIRMED').length;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── Header ── */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center">
            <ChefHat size={18} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-white leading-tight">{user?.restroname}</p>
            <p className="text-xs text-gray-400">Kitchen Display</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-gray-300">{pendingCount} New</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span className="text-gray-300">{preparingCount} Preparing</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-gray-300 font-mono text-sm">
            <Clock size={14} className="text-gray-500" />
            {clock}
          </div>

          {/* Auto-print toggle */}
          <button
            onClick={toggleAutoPrint}
            title={autoPrint ? 'Auto-print ON — click to disable' : 'Auto-print OFF — click to enable'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
              autoPrint
                ? 'bg-green-700/60 text-green-300 hover:bg-green-700'
                : 'bg-gray-800 text-gray-500 hover:bg-gray-700'
            }`}>
            <Printer size={14} />
            <span className="hidden sm:inline">{autoPrint ? 'Auto Print' : 'Print Off'}</span>
          </button>

          <button onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-red-900/60 hover:text-red-400 text-gray-400 text-sm transition-all">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      {/* ── Main board ── */}
      <main className="flex-1 p-5 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-gray-400">Loading orders...</p>
            </div>
          </div>
        ) : sorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
              <Utensils size={36} className="text-gray-600" />
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-400">No pending orders</p>
              <p className="text-gray-600 mt-1">New orders will appear here automatically 🎉</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sorted.map((order) => {
              const isPending  = order.status === 'PENDING';
              const isConfirmed = order.status === 'CONFIRMED';

              return (
                <div key={order.id}
                  className={`rounded-2xl border-2 flex flex-col transition-all ${
                    isPending
                      ? 'bg-yellow-950/40 border-yellow-500/60'
                      : 'bg-blue-950/40 border-blue-500/60'
                  }`}>

                  {/* Card header */}
                  <div className={`px-4 py-3 rounded-t-xl flex items-center justify-between ${
                    isPending ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                  }`}>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-widest ${
                        isPending ? 'text-yellow-400' : 'text-blue-400'
                      }`}>
                        {isPending ? '🟡 New Order' : '🔵 Preparing'}
                      </span>
                      <p className="font-bold text-white text-sm mt-0.5">
                        #{order.ordercode}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold text-sm">
                        {order.table?.name || 'Walk-in'}
                      </p>
                      <p className={`text-xs ${isPending ? 'text-yellow-400' : 'text-blue-400'}`}>
                        {timeAgo(order.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Items list */}
                  <div className="px-4 py-3 flex-1 space-y-2">
                    {order.items?.map((item) => (
                      <div key={item.id} className="flex items-start justify-between gap-2">
                        <span className="text-gray-200 text-sm leading-snug">{item.name_eng}</span>
                        <span className={`text-sm font-bold shrink-0 px-2 py-0.5 rounded-lg ${
                          isPending ? 'bg-yellow-500/30 text-yellow-300' : 'bg-blue-500/30 text-blue-300'
                        }`}>
                          ×{item.quantity}
                        </span>
                      </div>
                    ))}
                    {order.customername && order.customername !== 'Walk-in Customer' && (
                      <p className="text-xs text-gray-500 pt-1 border-t border-gray-700 mt-2">
                        👤 {order.customername}
                      </p>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="px-4 pb-4 flex flex-col gap-2">
                    {isPending && (
                      <button
                        onClick={() => confirmMutation.mutate(order.id)}
                        disabled={confirmMutation.isPending}
                        className="w-full py-2.5 rounded-xl font-semibold text-sm bg-yellow-500 hover:bg-yellow-400 text-gray-900 transition-all active:scale-95 disabled:opacity-50">
                        ▶ Start Preparing
                      </button>
                    )}
                    {isConfirmed && (
                      <button
                        onClick={() => completeMutation.mutate(order.id)}
                        disabled={completeMutation.isPending}
                        className="w-full py-2.5 rounded-xl font-semibold text-sm bg-green-500 hover:bg-green-400 text-white transition-all active:scale-95 disabled:opacity-50">
                        ✓ Mark Ready
                      </button>
                    )}
                    {/* Manual print button — useful on mobile with Bluetooth printer */}
                    <button
                      onClick={() => printKitchenTicket(order, user?.restroname)}
                      className="w-full py-2 rounded-xl text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-1.5">
                      <Printer size={12} /> Print Ticket
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
