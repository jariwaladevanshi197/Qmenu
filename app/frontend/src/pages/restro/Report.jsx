import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import StatCard from '../../components/ui/StatCard';
import { PageLoader } from '../../components/ui/Spinner';
import { ShoppingBag, TrendingUp, Tag, Percent, BarChart2, Download } from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts';

const COLORS = ['#f97316', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];

const fmt = (v) => `₹${Number(v || 0).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

const exportCSV = (data, filename) => {
  if (!data?.length) return;
  const keys = Object.keys(data[0]);
  const csv = [keys.join(','), ...data.map((r) => keys.map((k) => r[k]).join(','))].join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = filename;
  a.click();
};

export default function RestroReport() {
  const today = new Date().toISOString().split('T')[0];
  const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
  const [from, setFrom] = useState(firstDay);
  const [to, setTo] = useState(today);

  const { data: report, isLoading, refetch } = useQuery({
    queryKey: ['report', from, to],
    queryFn: () => api.get('/orders/report', { params: { from, to } }).then((r) => r.data),
    refetchInterval: 60000, // auto-refresh every 60s
  });

  const s = report?.summary;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Report</h1>
          <p className="text-sm text-gray-400 mt-0.5">Auto-refreshes every 60 seconds</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 card px-3 py-2">
            <div>
              <label className="text-xs text-gray-400 block">From</label>
              <input type="date" className="text-sm font-medium outline-none bg-transparent" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
            <span className="text-gray-300">→</span>
            <div>
              <label className="text-xs text-gray-400 block">To</label>
              <input type="date" className="text-sm font-medium outline-none bg-transparent" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
          </div>
          <button className="btn-secondary btn-sm" onClick={() => { setFrom(today); setTo(today); }}>Today</button>
          <button className="btn-secondary btn-sm" onClick={() => { setFrom(firstDay); setTo(today); }}>This Month</button>
          <button className="btn-primary btn-sm" onClick={() => refetch()}>↻ Refresh</button>
        </div>
      </div>

      {isLoading ? <PageLoader /> : !report ? null : (
        <>
          {/* Summary cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <StatCard label="Total Orders"    value={s.orders}                                                   icon={ShoppingBag}  color="primary" />
            <StatCard label="Gross Revenue"   value={fmt(s.subtotal)}                                            icon={TrendingUp}   color="green" />
            <StatCard label="Total Discount"  value={fmt(s.discount)}                                            icon={Tag}          color="yellow" />
            <StatCard label="Service Charge"  value={fmt(s.servicecharge)}                                       icon={Percent}      color="blue" />
            <StatCard label="Net Revenue"     value={fmt(s.grandtotal)}                                          icon={BarChart2}    color="purple" />
            <StatCard label="Avg Order Value" value={fmt(s.avgOrderValue)}                                       icon={TrendingUp}   color="primary" />
          </div>

          {/* Daily Revenue Chart */}
          {report.daily?.length > 0 && (
            <div className="card p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Daily Revenue</h2>
                <button className="btn-ghost btn-sm" onClick={() => exportCSV(report.daily, 'daily_revenue.csv')}>
                  <Download size={13} /> Export
                </button>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={report.daily} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} tickFormatter={(d) => d.slice(5)} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `₹${v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v}`} />
                  <Tooltip formatter={(v) => fmt(v)} labelFormatter={(l) => `Date: ${l}`} />
                  <Bar dataKey="revenue" name="Revenue" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Orders per day */}
            {report.daily?.length > 0 && (
              <div className="card p-5">
                <h2 className="font-semibold text-gray-900 mb-4">Orders Per Day</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={report.daily}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} tickFormatter={(d) => d.slice(5)} />
                    <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                    <Tooltip labelFormatter={(l) => `Date: ${l}`} />
                    <Line type="monotone" dataKey="orders" name="Orders" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Hourly distribution */}
            {report.hourly?.some((h) => h.orders > 0) && (
              <div className="card p-5">
                <h2 className="font-semibold text-gray-900 mb-4">Orders by Hour</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={report.hourly.filter((_, i) => i >= 8 && i <= 23)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="hour" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="orders" name="Orders" fill="#10b981" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* Top selling items */}
          {report.topItems?.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bar chart */}
              <div className="card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-gray-900">Top Selling Items (Qty)</h2>
                  <button className="btn-ghost btn-sm" onClick={() => exportCSV(report.topItems, 'top_items.csv')}>
                    <Download size={13} /> Export
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={report.topItems.slice(0, 6)} layout="vertical" margin={{ left: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" tick={{ fontSize: 11 }} allowDecimals={false} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={60} />
                    <Tooltip />
                    <Bar dataKey="qty" name="Qty Sold" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie chart — revenue share */}
              <div className="card p-5">
                <h2 className="font-semibold text-gray-900 mb-4">Revenue by Item</h2>
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie data={report.topItems.slice(0, 6)} dataKey="revenue" nameKey="name"
                      cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}>
                      {report.topItems.slice(0, 6).map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => fmt(v)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Top items table */}
          {report.topItems?.length > 0 && (
            <div className="card overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Item-wise Sales</h2>
                <button className="btn-ghost btn-sm" onClick={() => exportCSV(report.topItems, 'item_sales.csv')}>
                  <Download size={13} /> CSV
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-5 py-3 text-left font-medium text-gray-500">#</th>
                      <th className="px-5 py-3 text-left font-medium text-gray-500">Item</th>
                      <th className="px-5 py-3 text-right font-medium text-gray-500">Qty Sold</th>
                      <th className="px-5 py-3 text-right font-medium text-gray-500">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.topItems.map((item, i) => (
                      <tr key={item.name} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="px-5 py-3 text-gray-400">{i + 1}</td>
                        <td className="px-5 py-3 font-medium text-gray-900">{item.name}</td>
                        <td className="px-5 py-3 text-right text-gray-600">{item.qty}</td>
                        <td className="px-5 py-3 text-right font-semibold text-green-600">{fmt(item.revenue)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty state */}
          {s.orders === 0 && (
            <div className="text-center py-20 text-gray-400">
              <BarChart2 size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-medium text-gray-500">No orders in this period</p>
              <p className="text-sm mt-1">Try selecting a different date range</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
