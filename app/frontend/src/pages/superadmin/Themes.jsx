import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Plus, Pencil, Trash2, ShoppingCart, Leaf, X, Check, Copy, Zap } from 'lucide-react';

// ── Preset themes ────────────────────────────────────────────────────────────
const PRESETS = [
  { name: 'Ocean Blue',    primaryColor:'#1d6ef5', secondaryColor:'#0f172a', accentColor:'#38bdf8', bgColor:'#f0f7ff', cardColor:'#ffffff', textColor:'#0f172a', navBg:'#ffffff', buttonTextColor:'#ffffff', fontFamily:'Inter',           borderRadius:'rounded', darkMode:false },
  { name: 'Forest Green',  primaryColor:'#16a34a', secondaryColor:'#14532d', accentColor:'#4ade80', bgColor:'#f0fdf4', cardColor:'#ffffff', textColor:'#14532d', navBg:'#ffffff', buttonTextColor:'#ffffff', fontFamily:'Poppins',          borderRadius:'rounded', darkMode:false },
  { name: 'Royal Purple',  primaryColor:'#7c3aed', secondaryColor:'#2e1065', accentColor:'#c084fc', bgColor:'#faf5ff', cardColor:'#ffffff', textColor:'#1e1b4b', navBg:'#ffffff', buttonTextColor:'#ffffff', fontFamily:'Nunito',           borderRadius:'pill',    darkMode:false },
  { name: 'Sunset Orange', primaryColor:'#ea580c', secondaryColor:'#431407', accentColor:'#fb923c', bgColor:'#fff7ed', cardColor:'#ffffff', textColor:'#1c1917', navBg:'#ffffff', buttonTextColor:'#ffffff', fontFamily:'Inter',           borderRadius:'rounded', darkMode:false },
  { name: 'Rose Gold',     primaryColor:'#e11d48', secondaryColor:'#881337', accentColor:'#fb7185', bgColor:'#fff1f2', cardColor:'#ffffff', textColor:'#1c1917', navBg:'#ffffff', buttonTextColor:'#ffffff', fontFamily:'Playfair Display', borderRadius:'pill',    darkMode:false },
  { name: 'Dark Minimal',  primaryColor:'#f97316', secondaryColor:'#f3f4f6', accentColor:'#fbbf24', bgColor:'#111827', cardColor:'#1f2937', textColor:'#f9fafb', navBg:'#1f2937', buttonTextColor:'#111827', fontFamily:'Inter',           borderRadius:'sharp',   darkMode:true  },
  { name: 'Midnight Blue', primaryColor:'#6366f1', secondaryColor:'#e0e7ff', accentColor:'#818cf8', bgColor:'#0f172a', cardColor:'#1e293b', textColor:'#e2e8f0', navBg:'#1e293b', buttonTextColor:'#ffffff', fontFamily:'Roboto',          borderRadius:'rounded', darkMode:true  },
  { name: 'Classic Black', primaryColor:'#111827', secondaryColor:'#374151', accentColor:'#6b7280', bgColor:'#f9fafb', cardColor:'#ffffff', textColor:'#111827', navBg:'#111827', buttonTextColor:'#ffffff', fontFamily:'Inter',           borderRadius:'sharp',   darkMode:false },
];

const FONTS = ['Inter', 'Poppins', 'Roboto', 'Playfair Display', 'Nunito', 'Lato', 'Montserrat', 'Raleway'];
const RADIUS_OPTIONS = [
  { key: 'sharp',   label: 'Sharp',   px: '0px',    preview: 'rounded-none' },
  { key: 'rounded', label: 'Rounded', px: '12px',   preview: 'rounded-xl' },
  { key: 'pill',    label: 'Pill',    px: '999px',  preview: 'rounded-full' },
];
const radiusPx = { sharp: '0px', rounded: '12px', pill: '999px' };

// ── Hex + Color Picker combo ─────────────────────────────────────────────────
const ColorField = ({ label, value, onChange, hint }) => {
  const [hex, setHex] = useState(value);

  const handleHex = (v) => {
    setHex(v);
    if (/^#[0-9A-Fa-f]{6}$/.test(v)) onChange(v);
  };

  const handlePicker = (v) => { setHex(v); onChange(v); };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{label}</label>
        {hint && <span className="text-[10px] text-gray-400">{hint}</span>}
      </div>
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5">
        <label className="cursor-pointer relative shrink-0">
          <div className="w-7 h-7 rounded-md border border-gray-300 shadow-sm" style={{ backgroundColor: value }} />
          <input type="color" value={value} onChange={(e) => handlePicker(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
        </label>
        <input
          type="text"
          value={hex}
          onChange={(e) => handleHex(e.target.value)}
          onBlur={() => setHex(value)}
          className="flex-1 text-xs font-mono bg-transparent outline-none text-gray-700 min-w-0"
          maxLength={7}
          placeholder="#000000"
        />
        <button onClick={() => { navigator.clipboard?.writeText(value); toast.success('Copied!', { duration: 1000 }); }}
          className="text-gray-300 hover:text-gray-500 transition-colors">
          <Copy size={11} />
        </button>
      </div>
    </div>
  );
};

// ── Live Phone Preview ────────────────────────────────────────────────────────
const PhonePreview = ({ theme: t }) => {
  const r = radiusPx[t.borderRadius] || '12px';
  return (
    <div className="flex flex-col items-center">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=${(t.fontFamily||'Inter').replace(' ', '+')}:wght@400;600;700&display=swap');`}</style>
      <div className="relative w-[220px] h-[460px] rounded-[32px] border-[6px] border-gray-800 shadow-2xl overflow-hidden bg-white"
        style={{ backgroundColor: t.bgColor, fontFamily: `'${t.fontFamily}', sans-serif` }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl z-10" />

        {/* Navbar */}
        <div className="px-3 pt-5 pb-2 flex items-center justify-between shadow-sm" style={{ backgroundColor: t.navBg }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: t.primaryColor }} />
            <span className="text-xs font-bold" style={{ color: t.textColor }}>My Restaurant</span>
          </div>
          <div className="relative">
            <ShoppingCart size={13} style={{ color: t.primaryColor }} />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full text-[7px] flex items-center justify-center font-bold"
              style={{ backgroundColor: t.primaryColor, color: t.buttonTextColor }}>2</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="mx-2 mt-2 px-2 py-1.5 text-[9px] opacity-50" style={{ backgroundColor: t.textColor + '10', borderRadius: r, color: t.textColor }}>
          🔍 Search menu...
        </div>

        {/* Category tabs */}
        <div className="flex gap-1 px-2 py-2 overflow-x-hidden">
          {['All', 'Starters', 'Mains', 'Drinks'].map((cat, i) => (
            <div key={cat} className="shrink-0 px-2 py-0.5 text-[8px] font-bold"
              style={{
                backgroundColor: i === 0 ? t.primaryColor : t.cardColor,
                color: i === 0 ? t.buttonTextColor : t.textColor,
                borderRadius: r,
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}>
              {cat}
            </div>
          ))}
        </div>

        {/* Menu items */}
        <div className="px-2 space-y-2 overflow-hidden flex-1">
          {[
            { name: 'Paneer Tikka', price: 180, veg: true },
            { name: 'Chicken Biryani', price: 320, veg: false },
            { name: 'Mango Lassi', price: 80, veg: true },
          ].map((item) => (
            <div key={item.name} className="flex gap-2 p-2"
              style={{ backgroundColor: t.cardColor, borderRadius: r, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div className="w-10 h-10 shrink-0 flex items-center justify-center text-lg"
                style={{ backgroundColor: t.bgColor, borderRadius: `calc(${r} - 2px)` }}>
                {item.veg ? '🥗' : '🍗'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm border" style={{ borderColor: item.veg ? '#16a34a' : '#dc2626', backgroundColor: item.veg ? '#16a34a' : '#dc2626' }} />
                  <span className="text-[9px] font-semibold truncate" style={{ color: t.textColor }}>{item.name}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] font-bold" style={{ color: t.primaryColor }}>₹{item.price}</span>
                  <button className="px-2 py-0.5 text-[8px] font-bold flex items-center gap-0.5"
                    style={{ backgroundColor: t.primaryColor, color: t.buttonTextColor, borderRadius: radiusPx.pill }}>
                    <Plus size={7} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart bar */}
        <div className="absolute bottom-0 left-0 right-0 p-2" style={{ backgroundColor: t.navBg }}>
          <div className="py-2 text-center text-[9px] font-bold"
            style={{ backgroundColor: t.primaryColor, color: t.buttonTextColor, borderRadius: r }}>
            View Cart (3 items) · ₹580
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-3 font-medium">Live Preview</p>
    </div>
  );
};

// ── Builder ───────────────────────────────────────────────────────────────────
const DEFAULT = {
  title: '', primaryColor: '#f97316', secondaryColor: '#1f2937', accentColor: '#fbbf24',
  bgColor: '#f9fafb', cardColor: '#ffffff', textColor: '#111827', navBg: '#ffffff',
  buttonTextColor: '#ffffff', fontFamily: 'Inter', borderRadius: 'rounded', darkMode: false,
};

const ThemeBuilder = ({ initial, onSave, onCancel, saving }) => {
  const [t, setT] = useState({ ...DEFAULT, ...initial });
  const set = (key) => (val) => setT((p) => ({ ...p, [key]: val }));

  const applyPreset = (preset) => setT((p) => ({ ...p, ...preset }));

  const COLOR_SECTIONS = [
    {
      label: 'Brand Colors',
      fields: [
        { key: 'primaryColor',    label: 'Primary',      hint: 'Buttons, active tabs' },
        { key: 'accentColor',     label: 'Accent',       hint: 'Highlights, badges' },
        { key: 'secondaryColor',  label: 'Secondary',    hint: 'Headings, sidebar' },
      ],
    },
    {
      label: 'Background & Surface',
      fields: [
        { key: 'bgColor',         label: 'Page BG',      hint: 'Main background' },
        { key: 'cardColor',       label: 'Card BG',      hint: 'Menu item cards' },
        { key: 'navBg',           label: 'Navbar BG',    hint: 'Top & bottom bar' },
      ],
    },
    {
      label: 'Text & Button',
      fields: [
        { key: 'textColor',       label: 'Body Text',    hint: 'Item names, labels' },
        { key: 'buttonTextColor', label: 'Button Text',  hint: 'Text on primary buttons' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">{initial?.id ? 'Edit Theme' : 'Create Theme'}</h2>
          <button onClick={onCancel} className="p-2 rounded-lg hover:bg-gray-100"><X size={18} /></button>
        </div>

        <div className="flex flex-1 overflow-hidden">

          {/* Left panel: controls */}
          <div className="w-80 shrink-0 overflow-y-auto border-r border-gray-100 px-5 py-4 space-y-6">

            {/* Theme name */}
            <div>
              <label className="label">Theme Name</label>
              <input className="input" value={t.title} onChange={(e) => setT({ ...t, title: e.target.value })} placeholder="e.g. Ocean Blue" />
            </div>

            {/* Presets */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                <Zap size={11} /> Quick Presets
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {PRESETS.map((p) => (
                  <button key={p.name} onClick={() => applyPreset(p)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-all text-left"
                    title={p.name}>
                    <div className="w-4 h-4 rounded-full shrink-0 border border-white shadow-sm" style={{ backgroundColor: p.primaryColor }} />
                    <span className="text-xs text-gray-600 truncate">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color sections */}
            {COLOR_SECTIONS.map((section) => (
              <div key={section.label}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{section.label}</p>
                <div className="space-y-3">
                  {section.fields.map(({ key, label, hint }) => (
                    <ColorField key={key} label={label} hint={hint} value={t[key]} onChange={set(key)} />
                  ))}
                </div>
              </div>
            ))}

            {/* Font */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Font Family</p>
              <div className="grid grid-cols-2 gap-1.5">
                {FONTS.map((f) => (
                  <button key={f} onClick={() => setT({ ...t, fontFamily: f })}
                    className={`py-2 px-2 text-xs rounded-lg border transition-all text-left ${t.fontFamily === f ? 'border-blue-400 bg-blue-50 text-blue-700 font-semibold' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                    style={{ fontFamily: f }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Radius */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Border Radius</p>
              <div className="flex gap-2">
                {RADIUS_OPTIONS.map(({ key, label, px }) => (
                  <button key={key} onClick={() => setT({ ...t, borderRadius: key })}
                    className={`flex-1 py-3 text-xs font-medium border transition-all flex flex-col items-center gap-1.5 ${t.borderRadius === key ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                    style={{ borderRadius: px }}>
                    <div className="w-6 h-6 border-2 border-current" style={{ borderRadius: px }} />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm font-medium text-gray-700">Dark Mode</p>
                <p className="text-xs text-gray-400">Dark background theme</p>
              </div>
              <button onClick={() => setT({ ...t, darkMode: !t.darkMode })}
                className={`w-11 h-6 rounded-full transition-colors relative ${t.darkMode ? 'bg-blue-500' : 'bg-gray-200'}`}>
                <div className={`w-4 h-4 rounded-full bg-white shadow absolute top-1 transition-transform ${t.darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

          </div>

          {/* Right panel: live preview */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 bg-gray-50/80">
            <PhonePreview theme={t} />

            {/* Color summary strip */}
            <div className="mt-5 flex gap-2 flex-wrap justify-center">
              {['primaryColor','accentColor','bgColor','cardColor','navBg','textColor','buttonTextColor'].map((k) => (
                <div key={k} title={k.replace('Color','').replace(/([A-Z])/g,' $1').trim()}>
                  <div className="w-6 h-6 rounded-full border-2 border-white shadow" style={{ backgroundColor: t[k] }} />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">Color palette preview</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button className="btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn-primary" onClick={() => onSave(t)} disabled={saving || !t.title.trim()}>
            <Check size={15} /> {saving ? 'Saving...' : 'Save Theme'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main page ─────────────────────────────────────────────────────────────────
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
          <p className="text-sm text-gray-500 mt-0.5">Design color themes and assign to restaurants</p>
        </div>
        <button className="btn-primary" onClick={() => setBuilderOpen(true)}>
          <Plus size={16} /> Create Theme
        </button>
      </div>

      {/* Theme cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <div key={theme.id} className="card overflow-hidden">
            {/* Gradient header using theme colors */}
            <div className="h-20 relative" style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor})` }}>
              <div className="absolute inset-0 flex items-end px-4 pb-3">
                <span className="text-white font-bold text-sm drop-shadow-sm">{theme.title}</span>
              </div>
              {theme.darkMode && (
                <span className="absolute top-2 right-2 text-xs bg-black/30 text-white px-2 py-0.5 rounded-full">Dark</span>
              )}
            </div>

            <div className="p-4">
              {/* Color swatches */}
              <div className="flex gap-1.5 mb-3">
                {[theme.primaryColor, theme.accentColor, theme.bgColor, theme.cardColor, theme.navBg, theme.textColor, theme.buttonTextColor].map((c, i) => (
                  <div key={i} title={c} className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: c }} />
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="badge-gray text-xs" style={{ fontFamily: theme.fontFamily }}>{theme.fontFamily}</span>
                <span className="badge-gray text-xs capitalize">{theme.borderRadius}</span>
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
            <p className="text-sm text-gray-400 mt-1">Create your first theme using the builder</p>
            <button className="btn-primary mt-4" onClick={() => setBuilderOpen(true)}><Plus size={15} /> Create Theme</button>
          </div>
        )}
      </div>

      {builderOpen && (
        <ThemeBuilder initial={DEFAULT} onSave={(data) => createMutation.mutate(data)}
          onCancel={() => setBuilderOpen(false)} saving={createMutation.isPending} />
      )}
      {editTarget && (
        <ThemeBuilder initial={editTarget} onSave={(data) => updateMutation.mutate({ id: editTarget.id, data })}
          onCancel={() => setEditTarget(null)} saving={updateMutation.isPending} />
      )}
      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteMutation.mutate(deleteTarget)} loading={deleteMutation.isPending}
        message="Restaurants using this theme will lose their styling." />
    </div>
  );
}
