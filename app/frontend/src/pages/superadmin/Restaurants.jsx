import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Plus, Pencil, ToggleLeft, ToggleRight, Key, CreditCard, Search } from 'lucide-react';

const SUBTYPE_LABELS = { 0: 'Normal', 1: 'Mega', 2: 'Mega+Site' };
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

// Defined OUTSIDE component so it's never recreated on re-render
const Field = ({ label, children }) => (
  <div><label className="label">{label}</label>{children}</div>
);

const emptyForm = {
  restroname: '', mobileno: '', email: '', address: '', password: '', conpassword: '',
  gstno: '', subtype: '0', subplan: '1', price: '', themecode: '',
  latitude: '', longitude: '', distance: '', logo: null,
};

export default function SuperAdminRestaurants() {
  const qc = useQueryClient();
  const [search, setSearch] = useState('');
  const [subtypeFilter, setSubtypeFilter] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [planTarget, setPlanTarget] = useState(null);
  const [passTarget, setPassTarget] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [planForm, setPlanForm] = useState({});
  const [newPass, setNewPass] = useState('');

  const { data: restaurants = [], isLoading } = useQuery({
    queryKey: ['restaurants', search, subtypeFilter],
    queryFn: () => api.get('/admin/restaurants', { params: { search, subtype: subtypeFilter } }).then((r) => r.data),
  });

  const { data: themes = [] } = useQuery({
    queryKey: ['themes'],
    queryFn: () => api.get('/admin/themes').then((r) => r.data),
  });

  const addMutation = useMutation({
    mutationFn: (fd) => api.post('/admin/restaurants', fd),
    onSuccess: () => { qc.invalidateQueries(['restaurants']); toast.success('Restaurant created'); setAddOpen(false); setForm(emptyForm); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const editMutation = useMutation({
    mutationFn: ({ id, fd }) => api.put(`/admin/restaurants/${id}`, fd),
    onSuccess: () => { qc.invalidateQueries(['restaurants']); toast.success('Updated'); setEditTarget(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const toggleMutation = useMutation({
    mutationFn: (id) => api.patch(`/admin/restaurants/${id}/status`),
    onSuccess: () => qc.invalidateQueries(['restaurants']),
  });

  const planMutation = useMutation({
    mutationFn: ({ id, data }) => api.patch(`/admin/restaurants/${id}/plan`, data),
    onSuccess: () => { qc.invalidateQueries(['restaurants']); toast.success('Plan updated'); setPlanTarget(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const passMutation = useMutation({
    mutationFn: ({ id, password }) => api.patch(`/admin/restaurants/${id}/password`, { password }),
    onSuccess: () => { toast.success('Password updated'); setPassTarget(null); setNewPass(''); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const submitAdd = () => {
    if (form.password !== form.conpassword) return toast.error('Passwords do not match');
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => { if (k !== 'conpassword' && v !== null) fd.append(k, v); });
    addMutation.mutate(fd);
  };

  const openEdit = (r) => {
    setForm({ restroname: r.restroname, mobileno: r.mobileno, email: r.email, address: r.address, password: '', conpassword: '', gstno: r.gstno || '', subtype: String(r.subtype), subplan: String(r.subplan), price: String(r.price), themecode: String(r.themecode || ''), latitude: r.latitude || '', longitude: r.longitude || '', distance: r.distance || '', logo: null });
    setEditTarget(r.id);
  };

  const submitEdit = () => {
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => { if (k !== 'conpassword' && k !== 'password' && v !== null) fd.append(k, v); });
    editMutation.mutate({ id: editTarget, fd });
  };

  const openPlan = (r) => {
    const today = new Date().toISOString().split('T')[0];
    const exp = r.expdate ? new Date(r.expdate).toISOString().split('T')[0] : today;
    setPlanForm({ subplan: r.subplan, price: r.price, subtype: r.subtype, paymentdate: today, expdate: exp });
    setPlanTarget(r.id);
  };

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Restaurants</h1>
        <button className="btn-primary" onClick={() => setAddOpen(true)}><Plus size={16} /> Add Restaurant</button>
      </div>

      <div className="card p-4 mb-4 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input className="input pl-8" placeholder="Search restaurant..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <select className="input w-44" value={subtypeFilter} onChange={(e) => setSubtypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="0">Normal</option>
          <option value="1">Mega</option>
          <option value="2">Mega+Site</option>
        </select>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-4 py-3 text-left font-medium text-gray-500">ID</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Restaurant</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Mobile</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Type</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Expires</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Actions</th>
            </tr></thead>
            <tbody>
              {restaurants.map((r) => {
                const exp = new Date(r.expdate);
                const expired = exp < new Date();
                return (
                  <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-4 py-3 text-gray-400">{r.id}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{r.restroname}</p>
                      <p className="text-xs text-gray-400">{r.email}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{r.mobileno}</td>
                    <td className="px-4 py-3"><span className="badge-blue">{SUBTYPE_LABELS[r.subtype]}</span></td>
                    <td className="px-4 py-3">
                      <span className={expired ? 'text-red-500 text-xs font-medium' : 'text-gray-600 text-xs'}>
                        {exp.toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={r.status ? 'badge-green' : 'badge-red'}>{r.status ? 'Active' : 'Inactive'}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button className="btn-ghost btn-sm p-1.5" onClick={() => openEdit(r)} title="Edit"><Pencil size={14} /></button>
                        <button className="btn-ghost btn-sm p-1.5" onClick={() => toggleMutation.mutate(r.id)} title="Toggle status">
                          {r.status ? <ToggleRight size={14} className="text-green-500" /> : <ToggleLeft size={14} className="text-gray-400" />}
                        </button>
                        <button className="btn-ghost btn-sm p-1.5" onClick={() => openPlan(r)} title="Update plan"><CreditCard size={14} /></button>
                        <button className="btn-ghost btn-sm p-1.5" onClick={() => setPassTarget(r.id)} title="Change password"><Key size={14} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!restaurants.length && <p className="text-center py-10 text-gray-400">No restaurants found</p>}
        </div>
      </div>

      {/* Add Modal */}
      <Modal open={addOpen} onClose={() => setAddOpen(false)} title="Add New Restaurant" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Restaurant Name"><input className="input" value={form.restroname} onChange={(e) => setForm({ ...form, restroname: e.target.value })} /></Field>
          <Field label="Mobile"><input className="input" value={form.mobileno} onChange={(e) => setForm({ ...form, mobileno: e.target.value })} /></Field>
          <Field label="Email"><input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
          <Field label="GST No"><input className="input" value={form.gstno} onChange={(e) => setForm({ ...form, gstno: e.target.value })} /></Field>
          <div className="sm:col-span-2"><Field label="Address"><textarea className="input" rows={2} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></Field></div>
          <Field label="Password"><input className="input" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></Field>
          <Field label="Confirm Password"><input className="input" type="password" value={form.conpassword} onChange={(e) => setForm({ ...form, conpassword: e.target.value })} /></Field>
          <Field label="Type">
            <select className="input" value={form.subtype} onChange={(e) => setForm({ ...form, subtype: e.target.value })}>
              <option value="0">Normal</option><option value="1">Mega</option><option value="2">Mega+Site</option>
            </select>
          </Field>
          <Field label="Duration (months)">
            <select className="input" value={form.subplan} onChange={(e) => setForm({ ...form, subplan: e.target.value })}>
              {MONTHS.map((m) => <option key={m} value={m}>{m} month{m > 1 ? 's' : ''}</option>)}
            </select>
          </Field>
          <Field label="Price (₹)"><input className="input" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /></Field>
          <Field label="Theme">
            <select className="input" value={form.themecode} onChange={(e) => setForm({ ...form, themecode: e.target.value })}>
              <option value="">Select Theme</option>
              {themes.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select>
          </Field>
          <Field label="Logo"><input className="input" type="file" accept="image/*" onChange={(e) => setForm({ ...form, logo: e.target.files[0] })} /></Field>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button className="btn-secondary" onClick={() => setAddOpen(false)}>Cancel</button>
          <button className="btn-primary" onClick={submitAdd} disabled={addMutation.isPending}>
            {addMutation.isPending ? 'Creating...' : 'Create Restaurant'}
          </button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal open={!!editTarget} onClose={() => setEditTarget(null)} title="Edit Restaurant" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Restaurant Name"><input className="input" value={form.restroname} onChange={(e) => setForm({ ...form, restroname: e.target.value })} /></Field>
          <Field label="Mobile"><input className="input" value={form.mobileno} onChange={(e) => setForm({ ...form, mobileno: e.target.value })} /></Field>
          <Field label="Email"><input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
          <Field label="GST No"><input className="input" value={form.gstno} onChange={(e) => setForm({ ...form, gstno: e.target.value })} /></Field>
          <div className="sm:col-span-2"><Field label="Address"><textarea className="input" rows={2} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></Field></div>
          <Field label="Type">
            <select className="input" value={form.subtype} onChange={(e) => setForm({ ...form, subtype: e.target.value })}>
              <option value="0">Normal</option><option value="1">Mega</option><option value="2">Mega+Site</option>
            </select>
          </Field>
          <Field label="Theme">
            <select className="input" value={form.themecode} onChange={(e) => setForm({ ...form, themecode: e.target.value })}>
              <option value="">Select Theme</option>
              {themes.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select>
          </Field>
          <Field label="Update Logo"><input className="input" type="file" accept="image/*" onChange={(e) => setForm({ ...form, logo: e.target.files[0] })} /></Field>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button className="btn-secondary" onClick={() => setEditTarget(null)}>Cancel</button>
          <button className="btn-primary" onClick={submitEdit} disabled={editMutation.isPending}>
            {editMutation.isPending ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </Modal>

      {/* Plan Modal */}
      <Modal open={!!planTarget} onClose={() => setPlanTarget(null)} title="Update Subscription Plan" size="sm">
        <div className="space-y-3">
          <Field label="Type">
            <select className="input" value={planForm.subtype} onChange={(e) => setPlanForm({ ...planForm, subtype: e.target.value })}>
              <option value="0">Normal</option><option value="1">Mega</option><option value="2">Mega+Site</option>
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Price (₹)"><input className="input" type="number" value={planForm.price} onChange={(e) => setPlanForm({ ...planForm, price: e.target.value })} /></Field>
            <Field label="Months"><input className="input" type="number" value={planForm.subplan} onChange={(e) => setPlanForm({ ...planForm, subplan: e.target.value })} /></Field>
            <Field label="Payment Date"><input className="input" type="date" value={planForm.paymentdate} onChange={(e) => setPlanForm({ ...planForm, paymentdate: e.target.value })} /></Field>
            <Field label="Expire Date"><input className="input" type="date" value={planForm.expdate} onChange={(e) => setPlanForm({ ...planForm, expdate: e.target.value })} /></Field>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-5">
          <button className="btn-secondary" onClick={() => setPlanTarget(null)}>Cancel</button>
          <button className="btn-primary" onClick={() => planMutation.mutate({ id: planTarget, data: planForm })} disabled={planMutation.isPending}>
            {planMutation.isPending ? 'Updating...' : 'Update Plan'}
          </button>
        </div>
      </Modal>

      {/* Password Modal */}
      <Modal open={!!passTarget} onClose={() => setPassTarget(null)} title="Reset Password" size="sm">
        <Field label="New Password"><input className="input" type="text" value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="Enter new password" /></Field>
        <div className="flex justify-end gap-3 mt-5">
          <button className="btn-secondary" onClick={() => setPassTarget(null)}>Cancel</button>
          <button className="btn-primary" onClick={() => passMutation.mutate({ id: passTarget, password: newPass })} disabled={passMutation.isPending}>
            {passMutation.isPending ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      </Modal>
    </div>
  );
}
