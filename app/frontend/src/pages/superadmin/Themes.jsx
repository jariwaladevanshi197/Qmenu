import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Plus, Pencil, Trash2, ShoppingCart, Leaf, X, Check } from 'lucide-react';

// ── Default theme values ────────────────────────────────────────────────────
const DEFAULT = {
  title: '',
  primaryColor: '#f97316',
  secondaryColor: '#1f2937',
  accentColor: '#fbbf24',
  bgColor: '#f9fafb',
  cardColor: '#ffffff',
  textColor: '#111827',
  navBg: '#ffffff',
  buttonTextColor: '#ffffff',
  fontFamily: 'Inter',
  borderRadius: 'rounded',
  darkMode: false,
};

const FONTS = ['Inter', 'Poppins', 'Roboto', 'Playfair Display', 'Nunito', 'Lato'];
const RADIUS = [
  { key: 'sharp', label: 'Sharp', px: '0px' },
  { key: 'rounded', label: 'Rounded', px: '12px' },
  { key: 'pill', label: 'Pill', px: '999px' },
];

const radiusPx = { sharp: '0px', rounded: '12px', pill: '999px' };

// ── Color Picker Row ────────────────────────────────────────────────────────
const ColorRow = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
    <span className="text-sm text-gray-600">{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 font-mono">{value}</span>
      <label className="relative cursor-pointer">
        <div className="w-8 h-8 rounded-lg border-2 border-gray-200 shadow-sm overflow-hidden" style={{ backgroundColor: value }}>
          <input type="color" value={value} onChange={(e) => onChange(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
        </div>
      </label>
    </div>
  </div>
);

// ── Live Phone Preview ──────────────────────────────────────────────────────
const PhonePreview = ({ theme }) => {
  const r = radiusPx[theme.borderRadius] || '12px';
  const fontUrl = `https://fonts.googleapis.com/css2?family=${theme.fontFamily.replace(' ', '+')}:wght@400;600;700&display=swap`;

  return (
    <div className="flex flex-col items-center">
      <style>{`@import url('${fontUrl}');`}</style>
      {/* Phone frame */}
      <div className="relative w-[240px] h-[480px] rounded-[36px] border-[6px] border-gray-800 shadow-2xl overflow-hidden"
        style={{ backgroundColor: theme.bgColor, fontFamily: `'${theme.fontFamily}', sans-serif` }}>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-10" />

        {/* Navbar */}
        <div className="px-3 pt-6 pb-2 flex items-center justify-between" style={{ backgroundColor: theme.navBg, borderBottom: `1px solid ${theme.bgColor}` }}>
          <span className="font-bold text-xs" style={{ color: theme.textColor }}>🍽️ My Restaurant</span>
          <div className="relative">
            <ShoppingCart size={14} style={{ color: theme.primaryColor }} />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full text-[8px] flex items-center justify-center font-bold"
              style={{ backgroundColor: theme.primaryColor, color: theme.buttonTextColor }}>2</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-1.5 px-2 py-2 overflow-x-auto" style={{ backgroundColor: theme.navBg }}>
          {['Starters', 'Mains', 'Drinks'].map((cat, i) => (
            <div key={cat} className="shrink-0 px-2.5 py-1 text-[9px] font-semibold"
              style={{
                backgroundColor: i === 0 ? theme.primaryColor : theme.cardColor,
                color: i === 0 ? theme.buttonTextColor : theme.textColor,
                borderRadius: r,
                border: i !== 0 ? `1px solid ${theme.primaryColor}30` : 'none',
              }}>
              {cat}
            </div>
          ))}
        </div>

        {/* Menu items */}
        <div className="px-2 pt-1 space-y-2 overflow-hidden">
          {[
            { name: 'Paneer Tikka', price: 180, veg: true },
            { name: 'Chicken Biryani', price: 250, veg: false },
          ].map((item) => (
            <div key={item.name} className="flex gap-2 p-2"
              style={{ backgroundColor: theme.cardColor, borderRadius: r, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
              <div className="w-12 h-12 shrink-0 rounded-lg" style={{ backgroundColor: theme.bgColor, borderRadius: r }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="w-2 h-2 rounded-full border" style={{ borderColor: item.veg ? '#16a34a' : '#dc2626' }}>
                    <div className="w-1 h-1 rounded-full m-px" style={{ backgroundColor: item.veg ? '#16a34a' : '#dc2626' }} />
                  </div>
                  <span className="text-[9px] font-semibold truncate" style={{ color: theme.textColor }}>{item.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold" style={{ color: theme.primaryColor }}>₹{item.price}</span>
                  <button className="px-2 py-0.5 text-[8px] font-bold flex items-center gap-0.5"
                    style={{ backgroundColor: theme.primaryColor, color: theme.buttonTextColor, borderRadius: radiusPx.pill }}>
                    <Plus size={7} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart bar */}
        <div className="absolute bottom-0 left-0 right-0 p-2"
          style={{ backgroundColor: theme.navBg, borderTop: `1px solid ${theme.primaryColor}20` }}>
          <div className="w-full py-2 text-center text-[9px] font-bold"
            style={{ backgroundColor: theme.primaryColor, color: theme.buttonTextColor, borderRadius: r }}>
            View Cart (2 items) · ₹430
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-3">Live Preview</p>
    </div>
  );
};

// ── Theme Builder Form ──────────────────────────────────────────────────────
const ThemeBuilder = ({ initial, onSave, onCancel, saving }) => {
  const [t, setT] = useState(initial);
  const set = (key) => (val) => setT((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">{initial.id ? 'Edit Theme' : 'Create Theme'}</h2>
          <button onClick={onCancel} className="p-2 rounded-lg hover:bg-gray-100"><X size={18} /></button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left: Controls */}
          <div className="w-72 shrink-0 overflow-y-auto border-r border-gray-100 px-5 py-4 space-y-5">

            {/* Name */}
            <div>
              <label className="label">Theme Name</label>
              <input className="input" value={t.title} onChange={(e) => setT({ ...t, title: e.target.value })} placeholder="e.g. Ocean Blue" />
            </div>

            {/* Colors */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Colors</p>
              <div className="bg-gray-50 rounded-xl px-3 py-1">
                <ColorRow label="Primary" value={t.primaryColor} onChange={set('primaryColor')} />
                <ColorRow label="Secondary" value={t.secondaryColor} onChange={set('secondaryColor')} />
                <ColorRow label="Accent" value={t.accentColor} onChange={set('accentColor')} />
                <ColorRow label="Background" value={t.bgColor} onChange={set('bgColor')} />
                <ColorRow label="Card" value={t.cardColor} onChange={set('cardColor')} />
                <ColorRow label="Text" value={t.textColor} onChange={set('textColor')} />
                <ColorRow label="Navbar BG" value={t.navBg} onChange={set('navBg')} />
                <ColorRow label="Button Text" value={t.buttonTextColor} onChange={set('buttonTextColor')} />
              </div>
            </div>

            {/* Font */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Font</p>
              <div className="grid grid-cols-2 gap-1.5">
                {FONTS.map((f) => (
                  <button key={f} onClick={() => setT({ ...t, fontFamily: f })}
                    className={`py-1.5 px-2 text-xs rounded-lg border transition-all text-left ${t.fontFamily === f ? 'border-primary-400 bg-primary-50 text-primary-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                    style={{ fontFamily: f }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Radius */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Border Radius</p>
              <div className="flex gap-1.5">
                {RADIUS.map(({ key, label }) => (
                  <button key={key} onClick={() => setT({ ...t, borderRadius: key })}
                    className={`flex-1 py-2 text-xs font-medium border transition-all ${t.borderRadius === key ? 'border-primary-400 bg-primary-50 text-primary-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                    style={{ borderRadius: radiusPx[key] }}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-700">Dark Mode</span>
              <button onClick={() => setT({ ...t, darkMode: !t.darkMode })}
                className={`w-10 h-6 rounded-full transition-colors ${t.darkMode ? 'bg-primary-500' : 'bg-gray-200'}`}>
                <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform mx-1 ${t.darkMode ? 'translate-x-4' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="flex-1 overflow-y-auto flex items-center justify-center p-6 bg-gray-50">
            <PhonePreview theme={t} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button className="btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn-primary" onClick={() => onSave(t)} disabled={saving || !t.title}>
            <Check size={15} /> {saving ? 'Saving...' : 'Save Theme'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Page ───────────────────────────────────────────────────────────────
export default function SuperAdminThemes() {
  const qc = useQueryClient();
  const [builderOpen, setBuilderOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const { data: themes = [], isLoading } = useQuery({
    queryKey: ['themes'],
    queryFn: () => api.get('/admin/themes').then((r) => r.data),
  });

  const createMutation = useMutation({
    mutationFn: (data) => api.post('/admin/themes', data),
    onSuccess: () => { qc.invalidateQueries(['themes']); toast.success('Theme created!'); setBuilderOpen(false); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => api.put(`/admin/themes/${id}`, data),
    onSuccess: () => { qc.invalidateQueries(['themes']); toast.success('Theme updated!'); setEditTarget(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/admin/themes/${id}`),
    onSuccess: () => { qc.invalidateQueries(['themes']); toast.success('Deleted'); setDeleteTarget(null); },
  });

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Themes</h1>
          <p className="text-sm text-gray-500 mt-0.5">Create color themes and assign them to restaurants</p>
        </div>
        <button className="btn-primary" onClick={() => setBuilderOpen(true)}>
          <Plus size={16} /> Create Theme
        </button>
      </div>

      {/* Theme cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <div key={theme.id} className="card overflow-hidden group">
            {/* Color strip */}
            <div className="h-16 relative" style={{ backgroundColor: theme.primaryColor }}>
              <div className="absolute inset-0 flex items-end px-3 pb-2">
                <span className="text-white font-bold text-sm drop-shadow">{theme.title}</span>
              </div>
              {/* Swatch dots */}
              <div className="absolute top-2 right-2 flex gap-1">
                {[theme.secondaryColor, theme.accentColor, theme.bgColor, theme.cardColor, theme.navBg].map((c, i) => (
                  <div key={i} className="w-4 h-4 rounded-full border-2 border-white/60 shadow" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            <div className="p-3">
              {/* Font + radius info */}
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-gray text-xs" style={{ fontFamily: theme.fontFamily }}>{theme.fontFamily}</span>
                <span className="badge-gray text-xs capitalize">{theme.borderRadius}</span>
                {theme.darkMode && <span className="badge bg-gray-800 text-white text-xs">Dark</span>}
              </div>

              {/* Color swatches row */}
              <div className="flex gap-1 mb-3">
                {[
                  { c: theme.primaryColor, l: 'Primary' },
                  { c: theme.accentColor, l: 'Accent' },
                  { c: theme.bgColor, l: 'BG' },
                  { c: theme.cardColor, l: 'Card' },
                  { c: theme.textColor, l: 'Text' },
                  { c: theme.navBg, l: 'Nav' },
                ].map(({ c, l }) => (
                  <div key={l} title={`${l}: ${c}`} className="w-5 h-5 rounded border border-gray-200 shadow-sm" style={{ backgroundColor: c }} />
                ))}
              </div>

              <div className="flex gap-2">
                <button className="btn-secondary btn-sm flex-1" onClick={() => setEditTarget(theme)}>
                  <Pencil size={12} /> Edit
                </button>
                <button className="btn-ghost btn-sm p-2 text-red-400 hover:bg-red-50" onClick={() => setDeleteTarget(theme.id)}>
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {!themes.length && (
          <div className="col-span-full text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎨</span>
            </div>
            <p className="text-gray-500 font-medium">No themes yet</p>
            <p className="text-sm text-gray-400 mt-1">Create your first theme to style the customer menu</p>
            <button className="btn-primary mt-4" onClick={() => setBuilderOpen(true)}><Plus size={15} /> Create Theme</button>
          </div>
        )}
      </div>

      {/* Create Builder */}
      {builderOpen && (
        <ThemeBuilder
          initial={DEFAULT}
          onSave={(data) => createMutation.mutate(data)}
          onCancel={() => setBuilderOpen(false)}
          saving={createMutation.isPending}
        />
      )}

      {/* Edit Builder */}
      {editTarget && (
        <ThemeBuilder
          initial={editTarget}
          onSave={(data) => updateMutation.mutate({ id: editTarget.id, data })}
          onCancel={() => setEditTarget(null)}
          saving={updateMutation.isPending}
        />
      )}

      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteMutation.mutate(deleteTarget)}
        loading={deleteMutation.isPending}
        message="Restaurants using this theme will lose their styling."
      />
    </div>
  );
}
