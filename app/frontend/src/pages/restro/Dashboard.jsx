import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../../store/auth';
import api from '../../lib/api';
import StatCard from '../../components/ui/StatCard';
import { PageLoader } from '../../components/ui/Spinner';
import { ShoppingBag, TrendingUp, Clock, Tag, BookOpen, Table2, MessageSquare, Bell, ExternalLink, Globe } from 'lucide-react';

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

  if (isLoading) return <PageLoader />;

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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Today's Orders"  value={stats.todayOrders}                          icon={ShoppingBag}   color="primary" />
        <StatCard label="Total Revenue"   value={`₹${stats.totalRevenue?.toLocaleString()}`} icon={TrendingUp}    color="green" />
        <StatCard label="Pending Orders"  value={stats.pendingOrders}                         icon={Clock}         color="yellow" />
        <StatCard label="Waiter Calls"    value={stats.waiterRequests}                        icon={Bell}          color="red" />
        <StatCard label="Categories"      value={stats.categories}                            icon={Tag}           color="blue" />
        <StatCard label="Menu Items"      value={stats.items}                                 icon={BookOpen}      color="purple" />
        <StatCard label="Tables"          value={stats.tables}                                icon={Table2}        color="blue" />
        <StatCard label="Feedback"        value={stats.feedback}                              icon={MessageSquare} color="primary" />
      </div>
    </div>
  );
}
