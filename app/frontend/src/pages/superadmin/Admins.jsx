import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { usePermission } from '../../hooks/usePermission';
import { useAuthStore } from '../../store/auth';
import { Plus, Pencil, Trash2, Shield, ShieldCheck, RotateCcw } from 'lucide-react';

const ROLES = ['super_admin', 'manager', 'viewer'];
const ROLE_LABELS = { super_admin: 'Super Admin', manager: 'Manager', viewer: 'Viewer' };
const ROLE_COLORS = { super_admin: 'bg-purple-100 text-purple-700', manager: 'bg-blue-100 text-blue-700', viewer: 'bg-gray-100 text-gray-600' };

const ALL_PERMISSIONS = {
  dashboard:   ['view'],
  restaurants: ['view', 'create', 'edit', 'toggleStatus', 'resetPassword', 'managePlan', 'manageWebsite'],
  payments:    ['view'],
  themes:      ['view', 'create', 'edit', 'delete'],
  admins:      ['view', 'create', 'edit', 'delete'],
};

const ACTION_LABELS = {
  view: 'View', create: 'Create', edit: 'Edit', delete: 'Delete',
  toggleStatus: 'Toggle Status', resetPassword: 'Reset Password',
  managePlan: 'Manage Plan', manageWebsite: 'Manage Website',
};

const Field = ({ label, children }) => (
  <div><label className="label">{label}</label>{children}</div>
);

const emptyForm = { fullname: '', username: '', email: '', password: '', role: 'manager' };

export default function SuperAdminAdmins() {
  const qc = useQueryClient();
  const can = usePermission();
  const { user: currentUser } = useAuthStore();

  if (!can('admins', 'view')) return <Navigate to="/admin/dashboard" replace />;

  const [addOpen, setAddOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [editForm, setEditForm] = useState({});
  const [permOverrides, setPermOverrides] = useState({});
  const [activeTab, setActiveTab] = useState('profile');

  const { data: admins = [], isLoading } = useQuery({
    queryKey: ['admins'],
    queryFn: () => api.get('/admin/admins').then((r) => r.data),
  });

  const addMutation = useMutation({
    mutationFn: (data) => api.post('/admin/admins', data),
    onSuccess: () => { qc.invalidateQueries(['admins']); toast.success('Admin created'); setAddOpen(false); setForm(emptyForm); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const editMutation = useMutation({
    mutationFn: ({ id, data }) => api.put(`/admin/admins/${id}`, data),
    onSuccess: () => { qc.invalidateQueries(['admins']); toast.success('Updated'); setEditTarget(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/admin/admins/${id}`),
    onSuccess: () => { qc.invalidateQueries(['admins']); toast.success('Deleted'); setDeleteTarget(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const openEdit = (admin) => {
    setEditForm({ fullname: admin.fullname, email: admin.email, role: admin.role, isActive: admin.isActive });
    // Build overrides from the stored permissions delta (not resolved)
    const stored = admin.permissions || {};
    setPermOverrides(JSON.parse(JSON.stringify(stored)));
    setActiveTab('profile');
    setEditTarget(admin);
  };

  const submitEdit = () => {
    const hasOverrides = Object.keys(permOverrides).length > 0;
    editMutation.mutate({
      id: editTarget.id,
      data: { ...editForm, permissions: hasOverrides ? permOverrides : null },
    });
  };

  const resetPermissions = () => setPermOverrides({});

  const toggleOverride = (section, action, currentResolved) => {
    setPermOverrides((prev) => {
      const next = { ...prev };
      if (!next[section]) next[section] = {};
      // If the current override matches what we're toggling to, remove it (revert to role default)
      const currentOverride = prev[section]?.[action];
      if (currentOverride !== undefined) {
        const newSection = { ...next[section] };
        delete newSection[action];
        if (Object.keys(newSection).length === 0) {
          delete next[section];
        } else {
          next[section] = newSection;
        }
      } else {
        // Toggle: flip from the resolved value
        next[section] = { ...next[section], [action]: !currentResolved };
      }
      return next;
    });
  };

  const getEffectivePermission = (admin, section, action) => {
    // For the permission grid, show what the current override state + role default gives
    const override = permOverrides[section]?.[action];
    if (override !== undefined) return override;
    return editTarget?.resolvedPermissions?.[section]?.[action] ?? false;
  };

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Users</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage admin accounts and their permissions</p>
        </div>
        {can('admins', 'create') && (
          <button className="btn-primary" onClick={() => { setForm(emptyForm); setAddOpen(true); }}>
            <Plus size={16} /> Add Admin
          </button>
        )}
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-left font-medium text-gray-500">Admin</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Username</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Role</th>
                <th className="px-4 py-3 text-center font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => {
                const isSelf = admin.id === currentUser?.id;
                const isRoot = admin.isRoot;
                return (
                  <tr key={admin.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {isRoot && <ShieldCheck size={14} className="text-purple-500 shrink-0" />}
                        <div>
                          <p className="font-medium text-gray-900">{admin.fullname}</p>
                          <p className="text-xs text-gray-400">{admin.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">{admin.username}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${ROLE_COLORS[admin.role] || 'bg-gray-100 text-gray-600'}`}>
                          {ROLE_LABELS[admin.role] || admin.role}
                        </span>
                        {isRoot && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
                            Root
                          </span>
                        )}
                        {isSelf && (
                          <span className="text-[10px] text-gray-400">(you)</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block w-2 h-2 rounded-full ${admin.isActive ? 'bg-green-500' : 'bg-gray-300'}`} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        {can('admins', 'edit') && !isRoot && !isSelf && (
                          <button className="btn-ghost btn-sm p-1.5" onClick={() => openEdit(admin)} title="Edit">
                            <Pencil size={14} />
                          </button>
                        )}
                        {can('admins', 'delete') && !isRoot && !isSelf && (
                          <button className="btn-ghost btn-sm p-1.5 text-red-400 hover:bg-red-50" onClick={() => setDeleteTarget(admin.id)} title="Delete">
                            <Trash2 size={14} />
                          </button>
                        )}
                        {(isRoot || isSelf) && (
                          <span className="text-xs text-gray-300 px-1">—</span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!admins.length && <p className="text-center py-10 text-gray-400">No admins found</p>}
        </div>
      </div>

      {/* Add Modal */}
      <Modal open={addOpen} onClose={() => setAddOpen(false)} title="Add Admin User" size="md">
        <div className="space-y-4">
          <Field label="Full Name">
            <input className="input" value={form.fullname} onChange={(e) => setForm({ ...form, fullname: e.target.value })} placeholder="John Doe" />
          </Field>
          <Field label="Username">
            <input className="input" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder="johndoe" />
          </Field>
          <Field label="Email">
            <input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
          </Field>
          <Field label="Password">
            <input className="input" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </Field>
          <Field label="Role">
            <select className="input" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
              {ROLES.map((r) => <option key={r} value={r}>{ROLE_LABELS[r]}</option>)}
            </select>
            <p className="text-xs text-gray-400 mt-1">
              {form.role === 'manager' && 'Can view & edit restaurants, manage plans, manage themes. Cannot toggle status, reset passwords, or manage website.'}
              {form.role === 'viewer' && 'Read-only access to all sections. Cannot create, edit, or delete anything.'}
              {form.role === 'super_admin' && 'Full access to all sections. Can manage other admin accounts.'}
            </p>
          </Field>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button className="btn-secondary" onClick={() => setAddOpen(false)}>Cancel</button>
          <button className="btn-primary" onClick={() => addMutation.mutate(form)} disabled={addMutation.isPending}>
            {addMutation.isPending ? 'Creating...' : 'Create Admin'}
          </button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal open={!!editTarget} onClose={() => setEditTarget(null)} title={`Edit: ${editTarget?.fullname}`} size="lg">
        {/* Tabs */}
        <div className="flex border-b border-gray-100 mb-5 -mt-1">
          {['profile', 'permissions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors capitalize ${activeTab === tab ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              {tab === 'profile' ? 'Profile' : 'Permission Overrides'}
            </button>
          ))}
        </div>

        {activeTab === 'profile' && (
          <div className="space-y-4">
            <Field label="Full Name">
              <input className="input" value={editForm.fullname || ''} onChange={(e) => setEditForm({ ...editForm, fullname: e.target.value })} />
            </Field>
            <Field label="Email">
              <input className="input" type="email" value={editForm.email || ''} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} />
            </Field>
            <Field label="Role">
              <select className="input" value={editForm.role || 'manager'} onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}>
                {ROLES.map((r) => <option key={r} value={r}>{ROLE_LABELS[r]}</option>)}
              </select>
            </Field>
            <Field label="Status">
              <div className="flex items-center gap-3 mt-1">
                <button
                  onClick={() => setEditForm({ ...editForm, isActive: !editForm.isActive })}
                  className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none ${editForm.isActive ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <span className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${editForm.isActive ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className="text-sm text-gray-600">{editForm.isActive ? 'Active' : 'Inactive'}</span>
              </div>
            </Field>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">
                Overrides are applied on top of the role defaults. Toggle a permission to override it.
              </p>
              {Object.keys(permOverrides).length > 0 && (
                <button className="btn-ghost btn-sm text-xs flex items-center gap-1" onClick={resetPermissions}>
                  <RotateCcw size={11} /> Reset to role defaults
                </button>
              )}
            </div>
            <div className="space-y-4">
              {Object.entries(ALL_PERMISSIONS).map(([section, actions]) => (
                <div key={section} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 capitalize">{section}</p>
                  <div className="flex flex-wrap gap-2">
                    {actions.map((action) => {
                      const effective = getEffectivePermission(editTarget, section, action);
                      const hasOverride = permOverrides[section]?.[action] !== undefined;
                      return (
                        <button
                          key={action}
                          onClick={() => toggleOverride(section, action, effective)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all border ${
                            effective
                              ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
                              : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-100'
                          } ${hasOverride ? 'ring-2 ring-primary-300 ring-offset-1' : ''}`}
                          title={hasOverride ? 'Override active — click to remove' : 'Click to override'}
                        >
                          {effective ? '✓' : '×'} {ACTION_LABELS[action] || action}
                          {hasOverride && <span className="ml-0.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-400 mr-1" />
              Blue dot = permission has an active override from role default
            </p>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button className="btn-secondary" onClick={() => setEditTarget(null)}>Cancel</button>
          <button className="btn-primary" onClick={submitEdit} disabled={editMutation.isPending}>
            {editMutation.isPending ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </Modal>

      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteMutation.mutate(deleteTarget)}
        title="Delete Admin"
        message="Are you sure you want to delete this admin account? This action cannot be undone."
        loading={deleteMutation.isPending}
      />
    </div>
  );
}
