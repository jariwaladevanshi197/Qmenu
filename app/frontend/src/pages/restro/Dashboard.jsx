import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import api from '../../lib/api';
import StatCard from '../../components/ui/StatCard';
import { PageLoader } from '../../components/ui/Spinner';
import { ShoppingBag, TrendingUp, Clock, Tag, BookOpen, Table2, MessageSquare, Bell, ExternalLink, Globe, ArrowRight } from 'lucide-react';

const STATUS_BADGE = {
  PENDING:   'badge-yellow',
  CONFIRMED: 'badge-blue',
  COMPLETED: 'badge-green',
  CANCELLED: 'badge-red',
};

export default function RestroDashboard() {
  const { user } = useAuthStore();

  const { data: stats, isLoading } = useQuery({
    queryKey: ['restro-stats'],
    queryFn: () => api.get('/restaurant/stats').then((r) => r.data),
    refetchInterval: 30000,
  });

  const { data: profile } = useQuery({
    queryKey: ['restro-profile'],
    queryFn: () => api.get('/restaurant/profile').then((r) => r.data),
  });

  const { data: activeOrders = [] } = useQuery({
    queryKey: ['active-orders'],
    queryFn: () => api.get('/orders/active').then((r) => r.data),
    refetchInterval: 15000,
  });

  const { data: waiterRequests = [] } = useQuery({
    queryKey: ['waiter-requests'],
    queryFn: () => api.get('/orders/waiter').then((r) => r.data),
    refetchInterval: 30000,
  });

  if (isLoading || !stats) return <PageLoader />;

  const menuUrl = `/menu/${user?.slug || profile?.slug}`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-2">
          {(Number(profile?.subtype) === 2 || Number(user?.subtype) === 2) && (
            <a href={`/r/${user?.slug || profile?.slug}`} target="_blank" rel="noreferrer"
              style={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' }}
              className="btn-sm flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold">
              <Globe size={13} /> Our Website
            </a>
          )}
          <a href={menuUrl} target="_blank" rel="noreferrer"
            style={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0' }}
            className="btn-sm flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold">
            <ExternalLink size={13} /> Preview Menu
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Today's Orders"  value={stats.todayOrders}                          icon={ShoppingBag}   color="primary" />
        <StatCard label="Total Revenue"   value={`₹${stats.totalRevenue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} icon={TrendingUp}    color="green" />
        <StatCard label="Pending Orders"  value={stats.pendingOrders}                         icon={Clock}         color="yellow" />
        <StatCard label="Waiter Calls"    value={stats.waiterRequests}                        icon={Bell}          color="red" />
        <StatCard label="Categories"      value={stats.categories}                            icon={Tag}           color="blue" />
        <StatCard label="Menu Items"      value={stats.items}                                 icon={BookOpen}      color="purple" />
        <StatCard label="Tables"          value={stats.tables}                                icon={Table2}        color="blue" />
        <StatCard label="Feedback"        value={stats.feedback}                              icon={MessageSquare} color="primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900">Active Orders</h2>
            <Link to="/restro/orders" className="text-sm text-primary-600 font-medium flex items-center gap-1 hover:underline">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          {activeOrders.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">No active orders right now</p>
          ) : (
            <div className="space-y-2">
              {activeOrders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{order.table?.name || 'No Table'}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {order.customername || 'Guest'} · {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={STATUS_BADGE[order.status]}>{order.status}</span>
                    <span className="font-semibold text-gray-900 text-sm">₹{order.grandtotal.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900">Waiter Calls</h2>
            <Link to="/restro/notifications" className="text-sm text-primary-600 font-medium flex items-center gap-1 hover:underline">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          {waiterRequests.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-8">No pending waiter calls</p>
          ) : (
            <div className="space-y-2">
              {waiterRequests.slice(0, 5).map((req) => (
                <div key={req.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm">{req.table?.name || 'Unknown table'}</p>
                  <p className="text-xs text-gray-400">{new Date(req.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
