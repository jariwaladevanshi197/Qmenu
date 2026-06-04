import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import StatCard from '../../components/ui/StatCard';
import { PageLoader } from '../../components/ui/Spinner';
import { ShoppingBag, TrendingUp, Tag, Percent } from 'lucide-react';

export default function RestroReport() {
  const today = new Date().toISOString().split('T')[0];
  const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
  const [from, setFrom] = useState(firstDay);
  const [to, setTo] = useState(today);

  const { data: report, isLoading } = useQuery({
    queryKey: ['report', from, to],
    queryFn: () => api.get('/orders/report', { params: { from, to } }).then((r) => r.data),
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Sales Report</h1>
      <div className="card p-4 mb-6 flex flex-wrap gap-3 items-end">
        <div><label className="label">From</label><input className="input w-40" type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></div>
        <div><label className="label">To</label><input className="input w-40" type="date" value={to} onChange={(e) => setTo(e.target.value)} /></div>
      </div>

      {isLoading ? <PageLoader /> : report && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Orders" value={report.orders} icon={ShoppingBag} color="primary" />
          <StatCard label="Gross Revenue" value={`₹${report.revenue?.subtotal?.toFixed(0) || 0}`} icon={TrendingUp} color="green" />
          <StatCard label="Total Discount" value={`₹${report.revenue?.discount?.toFixed(0) || 0}`} icon={Tag} color="yellow" />
          <StatCard label="Net Revenue" value={`₹${report.revenue?.grandtotal?.toFixed(0) || 0}`} icon={Percent} color="blue" />
        </div>
      )}
    </div>
  );
}
