import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import StatCard from '../../components/ui/StatCard';
import { PageLoader } from '../../components/ui/Spinner';
import { Store, CheckCircle, XCircle, AlertCircle, DollarSign } from 'lucide-react';

export default function SuperAdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => api.get('/admin/stats').then((r) => r.data),
  });

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <StatCard label="Total Restaurants" value={stats.total} icon={Store} color="blue" />
        <StatCard label="Active" value={stats.active} icon={CheckCircle} color="green" />
        <StatCard label="Inactive" value={stats.inactive} icon={XCircle} color="red" />
        <StatCard label="Expiring (30d)" value={stats.expiringSoon} icon={AlertCircle} color="yellow" />
        <StatCard label="Total Revenue" value={`₹${stats.totalRevenue?.toLocaleString()}`} icon={DollarSign} color="primary" />
      </div>
    </div>
  );
}
