import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../../store/auth';
import { subscribeToWaiterCalls } from '../../lib/realtime';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import { PageLoader } from '../../components/ui/Spinner';
import { Bell, BellOff, Check, Table2, Clock } from 'lucide-react';

export default function RestroNotifications() {
  const qc = useQueryClient();
  const { user } = useAuthStore();

  const { data: requests = [], isLoading } = useQuery({
    queryKey: ['waiter-requests'],
    queryFn: () => api.get('/orders/waiter').then((r) => r.data),
    refetchInterval: 15000,
  });

  // Supabase Realtime: refresh when new waiter call comes in
  useEffect(() => {
    if (!user?.id) return;
    return subscribeToWaiterCalls(user.id, () => {
      qc.invalidateQueries(['waiter-requests']);
      qc.invalidateQueries(['restro-stats']);
    });
  }, [user?.id, qc]);

  const dismissMutation = useMutation({
    mutationFn: (id) => api.delete(`/orders/waiter/${id}`),
    onSuccess: () => {
      qc.invalidateQueries(['waiter-requests']);
      qc.invalidateQueries(['restro-stats']);
      toast.success('Dismissed');
    },
  });

  const dismissAll = async () => {
    await Promise.all(requests.map((r) => api.delete(`/orders/waiter/${r.id}`)));
    qc.invalidateQueries(['waiter-requests']);
    qc.invalidateQueries(['restro-stats']);
    toast.success('All dismissed');
  };

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Waiter Calls</h1>
          <p className="text-sm text-gray-500 mt-0.5">Customers requesting assistance at their table</p>
        </div>
        {requests.length > 0 && (
          <button className="btn-secondary btn-sm" onClick={dismissAll}>
            <Check size={14} /> Dismiss All
          </button>
        )}
      </div>

      {requests.length === 0 ? (
        <div className="text-center py-24">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BellOff size={28} className="text-green-400" />
          </div>
          <p className="text-gray-500 font-medium">No pending waiter calls</p>
          <p className="text-sm text-gray-400 mt-1">This page updates automatically in real-time</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {requests.map((req) => (
            <div key={req.id} className="card p-5 border-l-4 border-orange-400 flex items-start justify-between gap-4 animate-pulse-once">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Bell size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {req.table ? req.table.name : req.tableid ? `Table #${req.tableid}` : 'Walk-in Customer'}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                    <Clock size={11} />
                    {new Date(req.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
              <button
                className="btn-primary btn-sm shrink-0"
                onClick={() => dismissMutation.mutate(req.id)}
                disabled={dismissMutation.isPending}
              >
                <Check size={13} /> Done
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
