import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Trash2, Download, Search, MessageSquare } from 'lucide-react';

const exportCSV = (data) => {
  const headers = ['Name', 'Mobile', 'Email', 'Date of Birth', 'Feedback', 'Date'];
  const rows = data.map((fb) => [
    fb.fullname,
    fb.mobile || '',
    fb.email || '',
    fb.dob ? new Date(fb.dob).toLocaleDateString() : '',
    (fb.feedback || '').replace(/,/g, ';'),
    new Date(fb.timestamp).toLocaleString(),
  ]);
  const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `feedback_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

export default function RestroFeedback() {
  const qc = useQueryClient();
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const { data: feedback = [], isLoading } = useQuery({
    queryKey: ['feedback'],
    queryFn: () => api.get('/orders/feedback').then((r) => r.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/orders/feedback/${id}`),
    onSuccess: () => { qc.invalidateQueries(['feedback']); toast.success('Deleted'); setDeleteTarget(null); },
  });

  const filtered = feedback.filter((fb) => {
    if (search && !fb.fullname?.toLowerCase().includes(search.toLowerCase()) &&
      !fb.mobile?.includes(search) && !fb.email?.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (from && new Date(fb.timestamp) < new Date(from)) return false;
    if (to && new Date(fb.timestamp) > new Date(to + 'T23:59:59')) return false;
    return true;
  });

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Feedback</h1>
          <p className="text-sm text-gray-500 mt-0.5">{feedback.length} total · {filtered.length} shown</p>
        </div>
        {filtered.length > 0 && (
          <button className="btn-secondary btn-sm" onClick={() => exportCSV(filtered)}>
            <Download size={14} /> Export CSV
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="card p-4 mb-5 flex flex-wrap gap-3 items-end">
        <div className="relative flex-1 min-w-40">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input className="input pl-8" placeholder="Search by name, mobile, email..."
            value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <label className="label">From</label>
          <input className="input w-36" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div>
          <label className="label">To</label>
          <input className="input w-36" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        {(search || from || to) && (
          <button className="btn-ghost btn-sm" onClick={() => { setSearch(''); setFrom(''); setTo(''); }}>Clear</button>
        )}
      </div>

      {/* Feedback list */}
      <div className="space-y-3">
        {filtered.map((fb) => (
          <div key={fb.id} className="card p-5">
            <div className="flex justify-between items-start gap-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare size={16} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{fb.fullname}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {fb.mobile && <span className="text-xs text-gray-500">📞 {fb.mobile}</span>}
                    {fb.email  && <span className="text-xs text-gray-500">✉️ {fb.email}</span>}
                    {fb.dob    && <span className="text-xs text-gray-500">🎂 {new Date(fb.dob).toLocaleDateString()}</span>}
                    <span className="text-xs text-gray-400">{new Date(fb.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <button className="btn-ghost btn-sm p-1.5 text-red-400 hover:bg-red-50 shrink-0"
                onClick={() => setDeleteTarget(fb.id)}>
                <Trash2 size={14} />
              </button>
            </div>
            {fb.feedback && (
              <div className="mt-3 text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border-l-4 border-primary-200">
                "{fb.feedback}"
              </div>
            )}
          </div>
        ))}

        {!filtered.length && (
          <div className="text-center py-16">
            <MessageSquare size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">{feedback.length ? 'No feedback matches your filter' : 'No feedback yet'}</p>
          </div>
        )}
      </div>

      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteMutation.mutate(deleteTarget)}
        loading={deleteMutation.isPending}
        message="Delete this feedback entry?" />
    </div>
  );
}
