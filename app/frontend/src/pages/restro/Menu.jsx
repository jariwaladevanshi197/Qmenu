import { useState, useCallback, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import Modal from '../../components/ui/Modal';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { PageLoader } from '../../components/ui/Spinner';
import { Plus, Pencil, Trash2, Leaf, Drumstick, ImageOff, Languages } from 'lucide-react';
import { useTranslate } from '../../hooks/useTranslate';

const API = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';

const Field = ({ label, children }) => <div><label className="label">{label}</label>{children}</div>;

const emptyItem = { categoryid: '', name_eng: '', name_guj: '', name_hindi: '', price: '', veg: 'true', available: 'true', image: null };
const emptyCat = { name_eng: '', name_guj: '', name_hindi: '', categorydesc: '' };

export default function RestroMenu() {
  const qc = useQueryClient();
  const [activeTab, setActiveTab] = useState('items');
  const [activeCat, setActiveCat] = useState('');
  const [itemModal, setItemModal] = useState(null);
  const [catModal, setCatModal] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [itemForm, setItemForm] = useState(emptyItem);
  const [catForm, setCatForm] = useState(emptyCat);
  const { handleEngChange: handleItemEngChange } = useTranslate(setItemForm);
  const { handleEngChange: handleCatEngChange } = useTranslate(setCatForm);

  const { data: categories = [], isLoading: catsLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => api.get('/menu/categories').then((r) => r.data),
  });

  const { data: items = [], isLoading: itemsLoading } = useQuery({
    queryKey: ['items', activeCat],
    queryFn: () => api.get('/menu/items', { params: activeCat ? { categoryid: activeCat } : {} }).then((r) => r.data),
  });

  const addItemMutation = useMutation({
    mutationFn: (fd) => api.post('/menu/items', fd),
    onSuccess: () => { qc.invalidateQueries(['items']); toast.success('Item added'); setItemModal(null); setItemForm(emptyItem); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const editItemMutation = useMutation({
    mutationFn: ({ id, fd }) => api.put(`/menu/items/${id}`, fd),
    onSuccess: () => { qc.invalidateQueries(['items']); toast.success('Updated'); setItemModal(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const deleteItemMutation = useMutation({
    mutationFn: (id) => api.delete(`/menu/items/${id}`),
    onSuccess: () => { qc.invalidateQueries(['items']); toast.success('Deleted'); setDeleteTarget(null); },
  });

  const addCatMutation = useMutation({
    mutationFn: (data) => api.post('/menu/categories', data),
    onSuccess: () => { qc.invalidateQueries(['categories']); toast.success('Category added'); setCatModal(null); setCatForm(emptyCat); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const editCatMutation = useMutation({
    mutationFn: ({ id, data }) => api.put(`/menu/categories/${id}`, data),
    onSuccess: () => { qc.invalidateQueries(['categories']); toast.success('Updated'); setCatModal(null); },
    onError: (e) => toast.error(e.response?.data?.error || 'Error'),
  });

  const deleteCatMutation = useMutation({
    mutationFn: (id) => api.delete(`/menu/categories/${id}`),
    onSuccess: () => { qc.invalidateQueries(['categories']); qc.invalidateQueries(['items']); toast.success('Deleted'); setDeleteTarget(null); },
  });

  const openEditItem = (item) => {
    setItemForm({ categoryid: String(item.categoryid), name_eng: item.name_eng, name_guj: item.name_guj || '', name_hindi: item.name_hindi || '', price: String(item.price), veg: String(item.veg), available: String(item.available), image: null });
    setItemModal(item.id);
  };

  const submitItem = () => {
    const fd = new FormData();
    Object.entries(itemForm).forEach(([k, v]) => { if (v !== null) fd.append(k, v); });
    if (itemModal === 'new') addItemMutation.mutate(fd);
    else editItemMutation.mutate({ id: itemModal, fd });
  };

  if (catsLoading) return <PageLoader />;

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
        <div className="flex gap-2">
          <button className="btn-secondary btn-sm" onClick={() => { setCatForm(emptyCat); setCatModal('new'); }}>+ Category</button>
          <button className="btn-primary" onClick={() => { setItemForm(emptyItem); setItemModal('new'); }}><Plus size={16} /> Add Item</button>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
        <button onClick={() => setActiveCat('')} className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${!activeCat ? 'bg-primary-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>
          All ({items.length})
        </button>
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setActiveCat(String(cat.id))} className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeCat === String(cat.id) ? 'bg-primary-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>
            {cat.name_eng}
            <span className="text-xs opacity-70">({cat._count?.menuItems})</span>
            <button className={`ml-1 hover:scale-110 ${activeCat === String(cat.id) ? 'text-white/70' : 'text-gray-400'}`} onClick={(e) => { e.stopPropagation(); setCatForm({ name_eng: cat.name_eng, name_guj: cat.name_guj || '', name_hindi: cat.name_hindi || '', categorydesc: cat.categorydesc || '' }); setCatModal(cat.id); }}>
              <Pencil size={11} />
            </button>
            <button className={`hover:scale-110 ${activeCat === String(cat.id) ? 'text-white/70' : 'text-red-400'}`} onClick={(e) => { e.stopPropagation(); setDeleteTarget({ type: 'cat', id: cat.id }); }}>
              <Trash2 size={11} />
            </button>
          </button>
        ))}
      </div>

      {/* Items table */}
      {itemsLoading ? <PageLoader /> : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-left font-medium text-gray-500 w-14">Image</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500 hidden md:table-cell">Gujarati / Hindi</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Type</th>
                <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-right font-medium text-gray-500">Price</th>
                <th className="px-4 py-3 text-center font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
          {items.map((item) => (
            <tr key={item.id} className={`border-b border-gray-50 hover:bg-gray-50/60 transition-colors ${!item.available ? 'opacity-50' : ''}`}>
              {/* Image */}
              <td className="px-4 py-3">
                {item.image ? (
                  <img src={item.image.startsWith('http') ? item.image : `${API}${item.image}`} alt={item.name_eng}
                    className="w-10 h-10 rounded-lg object-cover border border-gray-100" />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ImageOff size={14} className="text-gray-300" />
                  </div>
                )}
              </td>
              {/* Name */}
              <td className="px-4 py-3">
                <p className="font-medium text-gray-900">{item.name_eng}</p>
              </td>
              {/* Gujarati / Hindi */}
              <td className="px-4 py-3 hidden md:table-cell">
                <p className="text-xs text-gray-500">{item.name_guj || '—'}</p>
                <p className="text-xs text-gray-400">{item.name_hindi || '—'}</p>
              </td>
              {/* Veg/Non-veg */}
              <td className="px-4 py-3">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${item.veg ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {item.veg ? <Leaf size={10} /> : <Drumstick size={10} />}
                  {item.veg ? 'Veg' : 'Non-veg'}
                </span>
              </td>
              {/* Available */}
              <td className="px-4 py-3">
                <span className={`badge ${item.available ? 'badge-green' : 'badge-red'}`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </td>
              {/* Price */}
              <td className="px-4 py-3 text-right font-bold text-primary-600">₹{item.price}</td>
              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex items-center justify-center gap-1">
                  <button className="btn-ghost btn-sm p-1.5" onClick={() => openEditItem(item)} title="Edit"><Pencil size={13} /></button>
                  <button className="btn-ghost btn-sm p-1.5 text-red-400 hover:bg-red-50" onClick={() => setDeleteTarget({ type: 'item', id: item.id })} title="Delete"><Trash2 size={13} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        {!items.length && (
          <div className="text-center py-12 text-gray-400">
            <ImageOff size={32} className="mx-auto mb-3 text-gray-300" />
            <p>No items yet. Click <strong>+ Add Item</strong> to get started.</p>
          </div>
        )}
        </div>
      )}

      {/* Item Modal */}
      <Modal open={!!itemModal} onClose={() => setItemModal(null)} title={itemModal === 'new' ? 'Add Menu Item' : 'Edit Item'} size="md">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2"><Field label="Category">
            <select className="input" value={itemForm.categoryid} onChange={(e) => setItemForm({ ...itemForm, categoryid: e.target.value })}>
              <option value="">Select Category</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name_eng}</option>)}
            </select>
          </Field></div>
          <Field label="Name (English)">
            <input className="input" value={itemForm.name_eng}
              onChange={(e) => handleItemEngChange(e.target.value)}
              placeholder="Type in English → auto-fills below" />
          </Field>
          <Field label="Price (₹)"><input className="input" type="number" value={itemForm.price} onChange={(e) => setItemForm({ ...itemForm, price: e.target.value })} /></Field>
          <Field label={<span className="flex items-center gap-1">Name (Gujarati) <Languages size={12} className="text-primary-400" /></span>}>
            <input className="input" value={itemForm.name_guj} onChange={(e) => setItemForm({ ...itemForm, name_guj: e.target.value })} placeholder="Auto-filled..." />
          </Field>
          <Field label={<span className="flex items-center gap-1">Name (Hindi) <Languages size={12} className="text-primary-400" /></span>}>
            <input className="input" value={itemForm.name_hindi} onChange={(e) => setItemForm({ ...itemForm, name_hindi: e.target.value })} placeholder="Auto-filled..." />
          </Field>
          <Field label="Type">
            <select className="input" value={itemForm.veg} onChange={(e) => setItemForm({ ...itemForm, veg: e.target.value })}>
              <option value="true">Veg</option><option value="false">Non-Veg</option>
            </select>
          </Field>
          <Field label="Availability">
            <select className="input" value={itemForm.available} onChange={(e) => setItemForm({ ...itemForm, available: e.target.value })}>
              <option value="true">Available</option><option value="false">Unavailable</option>
            </select>
          </Field>
          <div className="col-span-2"><Field label="Item Image"><input className="input" type="file" accept="image/*" onChange={(e) => setItemForm({ ...itemForm, image: e.target.files[0] })} /></Field></div>
        </div>
        <div className="flex justify-end gap-3 mt-5">
          <button className="btn-secondary" onClick={() => setItemModal(null)}>Cancel</button>
          <button className="btn-primary" onClick={submitItem}
            disabled={addItemMutation.isPending || editItemMutation.isPending || !itemForm.name_eng || !itemForm.price || !itemForm.categoryid}>
            {(addItemMutation.isPending || editItemMutation.isPending) ? 'Saving...' : 'Save'}
          </button>
        </div>
      </Modal>

      {/* Category Modal */}
      <Modal open={!!catModal} onClose={() => setCatModal(null)} title={catModal === 'new' ? 'Add Category' : 'Edit Category'} size="sm">
        <div className="space-y-3">
          <Field label="Name (English)">
            <input className="input" value={catForm.name_eng}
              onChange={(e) => handleCatEngChange(e.target.value)}
              placeholder="Type in English → auto-fills below" />
          </Field>
          <Field label={<span className="flex items-center gap-1">Name (Gujarati) <Languages size={12} className="text-primary-400" /></span>}>
            <input className="input" value={catForm.name_guj} onChange={(e) => setCatForm({ ...catForm, name_guj: e.target.value })} placeholder="Auto-filled..." />
          </Field>
          <Field label={<span className="flex items-center gap-1">Name (Hindi) <Languages size={12} className="text-primary-400" /></span>}>
            <input className="input" value={catForm.name_hindi} onChange={(e) => setCatForm({ ...catForm, name_hindi: e.target.value })} placeholder="Auto-filled..." />
          </Field>
        </div>
        <div className="flex justify-end gap-3 mt-5">
          <button className="btn-secondary" onClick={() => setCatModal(null)}>Cancel</button>
          <button className="btn-primary" onClick={() => catModal === 'new' ? addCatMutation.mutate(catForm) : editCatMutation.mutate({ id: catModal, data: catForm })} disabled={addCatMutation.isPending || editCatMutation.isPending}>
            {(addCatMutation.isPending || editCatMutation.isPending) ? 'Saving...' : 'Save'}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteTarget} onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteTarget?.type === 'item' ? deleteItemMutation.mutate(deleteTarget.id) : deleteCatMutation.mutate(deleteTarget.id)}
        loading={deleteItemMutation.isPending || deleteCatMutation.isPending}
        message={deleteTarget?.type === 'cat' ? 'This will delete the category and all its items.' : 'Delete this menu item?'} />
    </div>
  );
}
