import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Plus, Eye, EyeOff, Users, Shield, ChefHat, CreditCard } from 'lucide-react';

const ROLES = [
  { value: 'manager',  label: 'Manager',  icon: Shield,    color: 'badge-blue',   desc: 'Full access' },
  { value: 'cashier',  label: 'Cashier',  icon: CreditCard,color: 'badge-green',  desc: 'Orders & billing' },
  { value: 'staff',    label: 'Staff',    icon: ChefHat,   color: 'badge-gray',   desc: 'View orders' },
];

const Field = ({ label, children }) => <div><label className="label">{label}</label>{children}</div>;

const emptyForm = { fullname: '', username: '', password: '', role: 'staff' };

export default function RestroStaff() {
  const qc = useQueryClient();
  const [modal, setModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [showPw, setShowPw] = useState(false);

  const { data: staffData = {}, isLoading } = useQuery({
    queryKey: ['my-staff'],
    queryFn: () => api.get('/staff/my').then((r) => r.data),
  });
  const staff = staffData.staff || [];
  const maxStaff = staffData.maxStaff || 5;
  const used = staffData.used || 0;
  const remaining = maxStaff - used;
  const pct = Math.min((used / maxStaff) * 100, 100);

  const createMutation = useMutation({
    mutationFn: (data) => api.post('/staff/my', data),
    onSuccess: () => { qc.invalidateQueries(['my-staff']); toast.success('Staff member added!'); setModal(false); setForm(emptyForm); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/staff/${id}`),
    onSuccess: () => { qc.invalidateQueries(['my-staff']); toast.success('Removed'); setDeleteTarget(null); },
  });

  if (isLoading) return <PageLoader />;

  const getRoleBadge = (role) => ROLES.find((r) => r.value === role) || ROLES[2];

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Members</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage users who can access this restaurant's admin panel</p>
        </div>
        <button className="btn-primary" onClick={() => { setForm(emptyForm); setModal(true); }}
          disabled={remaining <= 0} title={remaining <= 0 ? 'Staff limit reached' : ''}>
          <Plus size={16} /> Add Staff
        </button>
      </div>

      {/* License usage bar */}
      <div className="card p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-semibold text-gray-900">Staff License</p>
            <p className="text-sm text-gray-500">{used} of {maxStaff} users used</p>
          </div>
          <div className="text-right">
            <span className={`text-2xl font-bold ${remaining === 0 ? 'text-red-500' : remaining <= 2 ? 'text-yellow-500' : 'text-green-500'}`}>
              {remaining}
            </span>
            <p className="text-xs text-gray-400">remaining</p>
          </div>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${pct}%`,
              backgroundColor: pct >= 100 ? '#ef4444' : pct >= 80 ? '#f59e0b' : '#22c55e',
            }} />
        </div>
        {remaining === 0 && (
          <p className="text-xs text-red-500 mt-2 font-medium">⚠️ Staff limit reached. Contact your admin to increase your plan.</p>
        )}
        {remaining > 0 && remaining <= 2 && (
          <p className="text-xs text-yellow-600 mt-2">⚠️ Only {remaining} slot{remaining > 1 ? 's' : ''} remaining.</p>
        )}
      </div>

      {/* Login info card */}
      <div className="card p-4 mb-6 bg-blue-50 border-blue-100">
        <p className="text-sm font-medium text-blue-800 mb-1">🔑 Staff Login URL</p>
        <p className="text-sm text-blue-600 font-mono">{window.location.origin}/restro/login</p>
        <p className="text-xs text-blue-500 mt-1">Staff members log in with their username & password at the restaurant login page</p>
      </div>

      {/* Staff table */}
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-5 py-3 text-left font-medium text-gray-500">Name</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">Username</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">Role</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">Status</th>
              <th className="px-5 py-3 text-left font-medium text-gray-500">Added</th>
              <th className="px-5 py-3 text-center font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => {
              const roleInfo = getRoleBadge(s.role);
              return (
                <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">
                        {s.fullname[0].toUpperCase()}
                      </div>
                      <span className="font-medium text-gray-900">{s.fullname}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 font-mono text-gray-600 text-xs">{s.username}</td>
                  <td className="px-5 py-3">
                    <span className={roleInfo.color}>{roleInfo.label}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={s.status ? 'badge-green' : 'badge-red'}>{s.status ? 'Active' : 'Inactive'}</span>
                  </td>
                  <td className="px-5 py-3 text-gray-400 text-xs">{new Date(s.createdAt).toLocaleDateString()}</td>
                  <td className="px-5 py-3 text-center">
                    <button className="btn-danger btn-sm" onClick={() => setDeleteTarget(s.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!staff.length && (
          <div className="text-center py-16">
            <Users size={36} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 font-medium">No staff members yet</p>
            <p className="text-sm text-gray-400 mt-1">Add staff so they can log in and manage orders</p>
          </div>
        )}
      </div>

      {/* Add Modal */}
      <Modal open={modal} onClose={() => setModal(false)} title="Add Staff Member" size="sm">
        <div className="space-y-4">
          <Field label="Full Name">
            <input className="input" value={form.fullname} onChange={(e) => setForm({ ...form, fullname: e.target.value })} placeholder="e.g. Rahul Sharma" />
          </Field>
          <Field label="Username (for login)">
            <input className="input" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value.toLowerCase().replace(/\s/g, '') })} placeholder="e.g. rahul123" />
          </Field>
          <Field label="Password">
            <div className="relative">
              <input className="input pr-10" type={showPw ? 'text' : 'password'} value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Min 6 characters" />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </Field>
          <Field label="Role">
            <div className="grid grid-cols-3 gap-2 mt-1">
              {ROLES.map(({ value, label, icon: Icon, desc }) => (
                <button key={value} type="button" onClick={() => setForm({ ...form, role: value })}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${form.role === value ? 'border-primary-400 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <Icon size={16} className={form.role === value ? 'text-primary-500' : 'text-gray-400'} />
                  <p className={`text-xs font-semibold mt-1 ${form.role === value ? 'text-primary-700' : 'text-gray-700'}`}>{label}</p>
                  <p className="text-[10px] text-gray-400">{desc}</p>
                </button>
              ))}
            </div>
          </Field>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="btn-secondary flex-1" onClick={() => setModal(false)}>Cancel</button>
          <button className="btn-primary flex-1" onClick={() => createMutation.mutate(form)}
            disabled={createMutation.isPending || !form.fullname || !form.username || !form.password}>
            {createMutation.isPending ? 'Adding...' : 'Add Staff'}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteMutation.mutate(deleteTarget)} loading={deleteMutation.isPending}
        message="This staff member will no longer be able to log in." />
    </div>
  );
}
