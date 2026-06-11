import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { PageLoader } from '../../components/ui/Spinner';
import { Search, Download, Users, Phone } from 'lucide-react';

const exportCSV = (data) => {
  const headers = ['Name', 'Mobile', 'Total Orders', 'Total Spent', 'Last Order'];
  const rows = data.map((c) => [
    c.customername || '',
    c.customermob || '',
    c.orderCount,
    c.totalSpent.toFixed(2),
    new Date(c.lastOrderAt).toLocaleString(),
  ]);
  const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `customers_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

export default function RestroCustomers() {
  const [search, setSearch] = useState('');

  const { data: customers = [], isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: () => api.get('/orders/customers').then((r) => r.data),
  });

  const filtered = customers.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return c.customername?.toLowerCase().includes(q) || c.customermob?.includes(search);
  });

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-sm text-gray-500 mt-0.5">{customers.length} total · {filtered.length} shown</p>
        </div>
        <button className="btn-secondary btn-sm" onClick={() => exportCSV(filtered)} disabled={!filtered.length}>
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* Search */}
      <div className="card p-4 mb-5">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input className="input pl-8" placeholder="Search by name or mobile..."
            value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Customer list */}
      <div className="space-y-3">
        {filtered.map((c) => (
          <div key={c.customermob} className="card p-5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={16} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{c.customername || 'Guest'}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-xs text-gray-500 inline-flex items-center gap-1"><Phone size={11} /> {c.customermob}</span>
                    <span className="text-xs text-gray-400">Last order: {new Date(c.lastOrderAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-gray-900">₹{c.totalSpent.toFixed(2)}</p>
                <p className="text-xs text-gray-500">{c.orderCount} order{c.orderCount === 1 ? '' : 's'}</p>
              </div>
            </div>
          </div>
        ))}

        {!filtered.length && (
          <div className="text-center py-16">
            <Users size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">{customers.length ? 'No customers match your search' : 'No customer details yet'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
