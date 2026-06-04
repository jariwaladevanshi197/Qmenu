import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Plus, Pencil, Trash2, QrCode, Download } from 'lucide-react';

const API = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';

export default function RestroTables() {
  const qc = useQueryClient();
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: '' });
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [qrLoading, setQrLoading] = useState(null);

  const { data: tables = [], isLoading } = useQuery({
    queryKey: ['tables'],
    queryFn: () => api.get('/menu/tables').then((r) => r.data),
  });

  const addMutation = useMutation({
    mutationFn: (data) => api.post('/menu/tables', data),
    onSuccess: () => { qc.invalidateQueries(['tables']); toast.success('Table added'); setModal(null); setForm({ name: '' }); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const editMutation = useMutation({
    mutationFn: ({ id, data }) => api.put(`/menu/tables/${id}`, data),
    onSuccess: () => { qc.invalidateQueries(['tables']); toast.success('Updated'); setModal(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/menu/tables/${id}`),
    onSuccess: () => { qc.invalidateQueries(['tables']); toast.success('Deleted'); setDeleteTarget(null); },
  });

  const generateQR = async (table) => {
    setQrLoading(table.id);
    try {
      await api.post(`/restaurant/tables/${table.id}/qr`);
      qc.invalidateQueries(['tables']);
      toast.success('QR code generated');
    } catch (e) {
      toast.error(e.response?.data?.error || 'Error');
    } finally {
      setQrLoading(null);
    }
  };

  const openEdit = (t) => { setForm({ name: t.name }); setModal(t.id); };

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tables</h1>
        <button className="btn-primary" onClick={() => { setForm({ name: '' }); setModal('new'); }}><Plus size={16} /> Add Table</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tables.map((t) => (
          <div key={t.id} className="card p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-gray-900">{t.name}</p>
              <div className="flex gap-1">
                <button className="btn-ghost btn-sm p-1.5" onClick={() => openEdit(t)}><Pencil size={13} /></button>
                <button className="btn-ghost btn-sm p-1.5 text-red-400 hover:bg-red-50" onClick={() => setDeleteTarget(t.id)}><Trash2 size={13} /></button>
              </div>
            </div>
            {t.qrimage ? (
              <div className="text-center">
                <img src={t.qrimage.startsWith('http') ? t.qrimage : `${API}${t.qrimage}`} alt="QR" className="w-32 h-32 mx-auto rounded-lg border border-gray-100" />
                <a href={t.qrimage.startsWith('http') ? t.qrimage : `${API}${t.qrimage}`} target="_blank" rel="noreferrer" className="btn-secondary btn-sm mt-2 inline-flex"><Download size={12} /> Download</a>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-4">
                <QrCode size={36} className="mx-auto mb-2 text-gray-300" />
                <p className="text-xs">No QR generated</p>
              </div>
            )}
            <button className="btn-secondary btn-sm w-full mt-3" onClick={() => generateQR(t)} disabled={qrLoading === t.id}>
              <QrCode size={12} /> {qrLoading === t.id ? 'Generating...' : t.qrimage ? 'Regenerate QR' : 'Generate QR'}
            </button>
          </div>
        ))}
        {!tables.length && <p className="col-span-full text-center py-10 text-gray-400">No tables yet</p>}
      </div>

      <Modal open={!!modal} onClose={() => setModal(null)} title={modal === 'new' ? 'Add Table' : 'Edit Table'} size="sm">
        <div><label className="label">Table Name</label><input className="input" value={form.name} onChange={(e) => setForm({ name: e.target.value })} placeholder="e.g. Table A1" /></div>
        <div className="flex justify-end gap-3 mt-5">
          <button className="btn-secondary" onClick={() => setModal(null)}>Cancel</button>
          <button className="btn-primary" onClick={() => modal === 'new' ? addMutation.mutate(form) : editMutation.mutate({ id: modal, data: form })} disabled={addMutation.isPending || editMutation.isPending}>
            {(addMutation.isPending || editMutation.isPending) ? 'Saving...' : 'Save'}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={() => deleteMutation.mutate(deleteTarget)} loading={deleteMutation.isPending} />
    </div>
  );
}
