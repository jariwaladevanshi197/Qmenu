import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Plus, Pencil, Key, CreditCard, Search, Globe, ToggleLeft, ToggleRight, Image, Clock, Link, Upload, Trash2 } from 'lucide-react';

const SUBTYPE_LABELS = { 0: 'Legacy', 1: 'Mega', 2: 'Mega+Web' };
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

// Defined OUTSIDE component so it's never recreated on re-render
const Field = ({ label, children }) => (
  <div><label className="label">{label}</label>{children}</div>
);

const emptyForm = {
  restroname: '', mobileno: '', email: '', address: '', password: '', conpassword: '',
  gstno: '', subtype: '1', subplan: '1', price: '', themecode: '',
  latitude: '', longitude: '', distance: '', maxStaff: '5', logo: null,
};

export default function SuperAdminRestaurants() {
  const qc = useQueryClient();
  const [search, setSearch] = useState('');
  const [subtypeFilter, setSubtypeFilter] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [planTarget, setPlanTarget] = useState(null);
  const [passTarget, setPassTarget] = useState(null);
  const [websiteTarget, setWebsiteTarget] = useState(null); // { id, slug }
  const [websiteTab, setWebsiteTab] = useState('content');
  const [websiteForm, setWebsiteForm] = useState({});
  const [websiteData, setWebsiteData] = useState(null);
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

  const openWebsite = async (r) => {
    setWebsiteTab('content');
    setWebsiteTarget({ id: r.id, slug: r.slug });
    try {
      const { data } = await api.get(`/website/${r.slug}`).catch(() => ({ data: r }));
      setWebsiteData(data);
      setWebsiteForm({
        heroTitle: data.heroTitle || '', tagline: data.tagline || '', aboutText: data.aboutText || '',
        phone: data.phone || '', whatsapp: data.whatsapp || '',
        facebookUrl: data.facebookUrl || '', instagramUrl: data.instagramUrl || '',
        mapEmbed: data.mapEmbed || '',
        openingHours: (() => { try { return JSON.parse(data.openingHours || '{}'); } catch { return {}; } })(),
      });
    } catch {
      setWebsiteData(r);
      setWebsiteForm({ tagline:'', aboutText:'', phone:'', whatsapp:'', facebookUrl:'', instagramUrl:'', mapEmbed:'', openingHours:{} });
    }
  };

  const saveWebsite = async () => {
    try {
      const payload = { ...websiteForm, openingHours: JSON.stringify(websiteForm.openingHours) };
      await api.put(`/website/admin/${websiteTarget.id}`, payload);
      qc.invalidateQueries(['restaurants']);
      toast.success('Website updated!');
    } catch (e) { toast.error(e.response?.data?.error || 'Error'); }
  };

  const toggleWebsiteEnabled = async () => {
    try {
      const { data } = await api.patch(`/website/admin/${websiteTarget.id}/toggle`);
      setWebsiteData((prev) => ({ ...prev, websiteEnabled: data.websiteEnabled }));
      qc.invalidateQueries(['restaurants']);
      toast.success(data.websiteEnabled ? 'Website enabled!' : 'Website disabled');
    } catch (e) { toast.error(e.response?.data?.error || 'Error'); }
  };

  const uploadBanner = async (file) => {
    const fd = new FormData(); fd.append('banner', file);
    try {
      const { data } = await api.post(`/website/admin/${websiteTarget.id}/banner`, fd);
      setWebsiteData((prev) => ({ ...prev, bannerImage: data.bannerImage }));
      toast.success('Banner uploaded!');
    } catch (e) { toast.error(e.response?.data?.error || 'Error'); }
  };

  const uploadAboutImg = async (file) => {
    const fd = new FormData(); fd.append('image', file);
    try {
      const { data } = await api.post(`/website/admin/${websiteTarget.id}/about-image`, fd);
      setWebsiteData((prev) => ({ ...prev, aboutImage: data.aboutImage }));
      toast.success('About image uploaded!');
    } catch (e) { toast.error(e.response?.data?.error || 'Error'); }
  };

  const uploadGallery = async (file) => {
    const fd = new FormData(); fd.append('image', file);
    try {
      const { data } = await api.post(`/website/admin/${websiteTarget.id}/gallery`, fd);
      setWebsiteData((prev) => ({ ...prev, galleryImages: JSON.stringify(data.galleryImages) }));
      toast.success('Image added!');
    } catch (e) { toast.error(e.response?.data?.error || 'Error'); }
  };

  const deleteGallery = async (url) => {
    try {
      const { data } = await api.delete(`/website/admin/${websiteTarget.id}/gallery`, { data: { url } });
      setWebsiteData((prev) => ({ ...prev, galleryImages: JSON.stringify(data.galleryImages) }));
      toast.success('Removed');
    } catch (e) { toast.error(e.response?.data?.error || 'Error'); }
  };

  const submitAdd = () => {
    if (form.password !== form.conpassword) return toast.error('Passwords do not match');
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => { if (k !== 'conpassword' && v !== null) fd.append(k, v); });
    addMutation.mutate(fd);
  };

  const openEdit = (r) => {
    setForm({ restroname: r.restroname, mobileno: r.mobileno, email: r.email, address: r.address, password: '', conpassword: '', gstno: r.gstno || '', subtype: String(r.subtype), subplan: String(r.subplan), price: String(r.price), themecode: String(r.themecode || ''), latitude: r.latitude || '', longitude: r.longitude || '', distance: r.distance || '', maxStaff: String(r.maxStaff || 5), logo: null });
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
          <option value="1">Mega</option>
          <option value="2">Mega + Web</option>
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
              <th className="px-4 py-3 text-left font-medium text-gray-500">Staff Limit</th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">Expires</th>
              <th className="px-4 py-3 text-center font-medium text-gray-500">Active</th>
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
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
                        👥 {r.maxStaff || 5} users
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={expired ? 'text-red-500 text-xs font-medium' : 'text-gray-600 text-xs'}>
                        {exp.toLocaleDateString()}
                      </span>
                    </td>
                    {/* Active toggle — separate column */}
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => toggleMutation.mutate(r.id)}
                        title={r.status ? 'Click to deactivate' : 'Click to activate'}
                        className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none ${r.status ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <span className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${r.status ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button className="btn-ghost btn-sm p-1.5" onClick={() => openEdit(r)} title="Edit"><Pencil size={14} /></button>
                        <button className="btn-ghost btn-sm p-1.5" onClick={() => openPlan(r)} title="Update plan"><CreditCard size={14} /></button>
                        <button className="btn-ghost btn-sm p-1.5" onClick={() => setPassTarget(r.id)} title="Change password"><Key size={14} /></button>
                        {r.subtype === 2 && (
                          <button className="btn-ghost btn-sm p-1.5 text-blue-500 hover:bg-blue-50" onClick={() => openWebsite(r)} title="Manage Website">
                            <Globe size={14} />
                          </button>
                        )}
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
              <option value="1">Mega</option><option value="2">Mega + Web</option>
            </select>
          </Field>
          <Field label="Duration (months)">
            <select className="input" value={form.subplan} onChange={(e) => setForm({ ...form, subplan: e.target.value })}>
              {MONTHS.map((m) => <option key={m} value={m}>{m} month{m > 1 ? 's' : ''}</option>)}
            </select>
          </Field>
          <Field label="Price (₹)"><input className="input" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /></Field>
          <Field label="Max Staff Users 👥">
            <input className="input" type="number" min="1" max="50" value={form.maxStaff} onChange={(e) => setForm({ ...form, maxStaff: e.target.value })} placeholder="e.g. 5" />
            <p className="text-xs text-gray-400 mt-1">How many staff accounts this restaurant can create</p>
          </Field>
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
              <option value="1">Mega</option><option value="2">Mega + Web</option>
            </select>
          </Field>
          <Field label="Theme">
            <select className="input" value={form.themecode} onChange={(e) => setForm({ ...form, themecode: e.target.value })}>
              <option value="">Select Theme</option>
              {themes.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select>
          </Field>
          <Field label="Max Staff Users 👥">
            <input className="input" type="number" min="1" max="50" value={form.maxStaff} onChange={(e) => setForm({ ...form, maxStaff: e.target.value })} />
            <p className="text-xs text-gray-400 mt-1">Max staff accounts this restaurant can create</p>
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
              <option value="1">Mega</option><option value="2">Mega + Web</option>
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

      {/* ── Website Editor Modal ── */}
      {websiteTarget && websiteData && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-blue-500" />
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Website Manager</h2>
                  <p className="text-xs text-gray-400">{websiteData.restroname}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Enable/Disable toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500">Website</span>
                  <button onClick={toggleWebsiteEnabled}
                    className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors ${websiteData.websiteEnabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                    <span className={`w-4 h-4 bg-white rounded-full shadow absolute transition-transform ${websiteData.websiteEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                  <span className={`text-xs font-semibold ${websiteData.websiteEnabled ? 'text-green-600' : 'text-gray-400'}`}>
                    {websiteData.websiteEnabled ? 'Live' : 'Off'}
                  </span>
                </div>
                {websiteData.websiteEnabled && (
                  <a href={`/r/${websiteTarget.slug}`} target="_blank" rel="noreferrer"
                    className="btn-secondary btn-sm"><Globe size={12} /> Preview</a>
                )}
                <button onClick={() => setWebsiteTarget(null)} className="p-2 rounded-lg hover:bg-gray-100">✕</button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-6">
              {[
                { key: 'content', label: '📝 Content' },
                { key: 'media',   label: '🖼️ Media' },
                { key: 'hours',   label: '🕐 Hours' },
                { key: 'social',  label: '🔗 Social & Map' },
              ].map(({ key, label }) => (
                <button key={key} onClick={() => setWebsiteTab(key)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${websiteTab === key ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                  {label}
                </button>
              ))}
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

              {websiteTab === 'content' && (
                <>
                  <Field label="Hero Title">
                    <input className="input" value={websiteForm.heroTitle || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, heroTitle: e.target.value })} placeholder={`Default: ${websiteData?.restroname || 'Restaurant Name'}`} />
                    <p className="text-xs text-gray-400 mt-1">Shown as the big heading in the hero section. Leave empty to use the restaurant name.</p>
                  </Field>
                  <Field label="Tagline">
                    <input className="input" value={websiteForm.tagline || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, tagline: e.target.value })} placeholder="e.g. Best biryani in Surat" />
                  </Field>
                  <Field label="About Us">
                    <textarea className="input" rows={4} value={websiteForm.aboutText || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, aboutText: e.target.value })} placeholder="Tell customers about your restaurant..." />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Public Phone">
                      <input className="input" value={websiteForm.phone || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, phone: e.target.value })} placeholder="Display phone number" />
                    </Field>
                    <Field label="WhatsApp Number">
                      <input className="input" value={websiteForm.whatsapp || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, whatsapp: e.target.value })} placeholder="With country code, e.g. 919408..." />
                    </Field>
                  </div>
                </>
              )}

              {websiteTab === 'media' && (
                <>
                  <div>
                    <label className="label">Hero Banner Image</label>
                    {websiteData.bannerImage && (
                      <img src={websiteData.bannerImage} alt="Banner" className="w-full h-40 object-cover rounded-xl mb-3" />
                    )}
                    <label className="flex items-center gap-2 cursor-pointer btn-secondary btn-sm w-fit">
                      <Upload size={14} /> Upload Banner
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files[0] && uploadBanner(e.target.files[0])} />
                    </label>
                  </div>

                  {/* About Us Image */}
                  <div>
                    <label className="label">About Us Image</label>
                    <p className="text-xs text-gray-400 mb-2">Shown next to the About Us text (restaurant interior, team photo, etc.)</p>
                    {websiteData.aboutImage && (
                      <div className="relative group w-40 mb-3">
                        <img src={websiteData.aboutImage} alt="About" className="w-40 h-28 object-cover rounded-xl border border-gray-100" />
                        <button
                          onClick={async () => {
                            await api.put(`/website/admin/${websiteTarget.id}`, { aboutImage: '' }).catch(() => {});
                            setWebsiteData((prev) => ({ ...prev, aboutImage: null }));
                            toast.success('Removed');
                          }}
                          className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center text-xs">✕</button>
                      </div>
                    )}
                    <label className="flex items-center gap-2 cursor-pointer btn-secondary btn-sm w-fit">
                      <Upload size={14} /> {websiteData.aboutImage ? 'Change Image' : 'Upload Image'}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files[0] && uploadAboutImg(e.target.files[0])} />
                    </label>
                  </div>

                  <div>
                    <label className="label">Gallery Photos</label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {JSON.parse(websiteData.galleryImages || '[]').map((url, i) => (
                        <div key={i} className="relative group aspect-square">
                          <img src={url} alt={`Gallery ${i}`} className="w-full h-full object-cover rounded-xl" />
                          <button onClick={() => deleteGallery(url)}
                            className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center text-xs">✕</button>
                        </div>
                      ))}
                      <label className="aspect-square border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-gray-300 transition-colors">
                        <Upload size={18} className="text-gray-400 mb-1" />
                        <span className="text-xs text-gray-400">Add Photo</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files[0] && uploadGallery(e.target.files[0])} />
                      </label>
                    </div>
                  </div>
                </>
              )}

              {websiteTab === 'hours' && (
                <div className="space-y-2">
                  {['mon','tue','wed','thu','fri','sat','sun'].map((day) => {
                    const h = websiteForm.openingHours?.[day] || {};
                    const setDay = (val) => setWebsiteForm((p) => ({ ...p, openingHours: { ...p.openingHours, [day]: val } }));
                    return (
                      <div key={day} className="flex items-center gap-3 py-2 border-b border-gray-50">
                        <span className="w-24 text-sm font-medium text-gray-700 capitalize">{day}</span>
                        <label className="flex items-center gap-1.5 text-xs text-gray-500">
                          <input type="checkbox" checked={!!h.closed} onChange={(e) => setDay({ ...h, closed: e.target.checked })} className="rounded" />
                          Closed
                        </label>
                        {!h.closed && (
                          <>
                            <input className="input py-1.5 text-sm w-28" type="time" value={h.open || ''} onChange={(e) => setDay({ ...h, open: e.target.value })} />
                            <span className="text-gray-400 text-sm">to</span>
                            <input className="input py-1.5 text-sm w-28" type="time" value={h.close || ''} onChange={(e) => setDay({ ...h, close: e.target.value })} />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {websiteTab === 'social' && (
                <>
                  <Field label="Instagram URL">
                    <input className="input" value={websiteForm.instagramUrl || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, instagramUrl: e.target.value })} placeholder="https://instagram.com/yourpage" />
                  </Field>
                  <Field label="Facebook URL">
                    <input className="input" value={websiteForm.facebookUrl || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, facebookUrl: e.target.value })} placeholder="https://facebook.com/yourpage" />
                  </Field>
                  <Field label="Google Maps Embed URL">
                    <input className="input" value={websiteForm.mapEmbed || ''} onChange={(e) => setWebsiteForm({ ...websiteForm, mapEmbed: e.target.value })} placeholder="Paste the src URL from Google Maps embed code" />
                    <p className="text-xs text-gray-400 mt-1">In Google Maps → Share → Embed a map → copy the src="..." URL</p>
                  </Field>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
              <button className="btn-secondary" onClick={() => setWebsiteTarget(null)}>Close</button>
              <button className="btn-primary" onClick={saveWebsite}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
