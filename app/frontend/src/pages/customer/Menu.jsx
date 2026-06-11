import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { useCartStore } from '../../store/cart';
import { useTheme } from '../../hooks/useTheme';
import toast from 'react-hot-toast';
import { PageLoader } from '../../components/ui/Spinner';
import Modal from '../../components/ui/Modal';
import { ShoppingCart, Search, Leaf, Drumstick, Plus, Minus, Download, Bell, X, MessageSquare, Star } from 'lucide-react';

const LANGS = [{ key: 'name_eng', label: 'Eng' }, { key: 'name_guj', label: 'ગુજ' }, { key: 'name_hindi', label: 'हिं' }];
const API = import.meta.env.VITE_API_URL?.replace('/api', '') || '';

export default function CustomerMenu() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const tableid = searchParams.get('table');
  const navigate = useNavigate();
  const [lang, setLang] = useState('name_eng');
  const [search, setSearch] = useState('');
  const [activecat, setActivecat] = useState(null);
  const [waiterLoading, setWaiterLoading] = useState(false);
  const [waiterDone, setWaiterDone] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({ fullname: '', mobile: '', email: '', feedback: '', dob: '' });
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const { items: cartItems, addItem, updateQty, setSlug, count } = useCartStore();

  useEffect(() => { setSlug(slug); }, [slug, setSlug]);

  const { data: restro, isLoading: restroLoading } = useQuery({
    queryKey: ['customer-restro', slug],
    queryFn: () => api.get(`/customer/restro/${slug}`).then((r) => r.data),
  });

  const { data: categories = [], isLoading: menuLoading } = useQuery({
    queryKey: ['customer-menu', slug],
    queryFn: () => api.get(`/customer/restro/${slug}/menu`).then((r) => r.data),
    enabled: !!restro,
  });

  const th = useTheme(restro?.theme);

  useEffect(() => {
    if (categories.length && activecat === null) setActivecat('all');
  }, [categories]);

  // Ordering is only allowed when customer scanned a table QR
  const canOrder = !!tableid;

  const getQty = (id) => cartItems.find((i) => i.menuitemid === id)?.quantity || 0;

  const handleAdd = (item) => {
    if (!canOrder) {
      toast('📱 Please scan your table QR code to place an order', { icon: 'ℹ️', duration: 3000 });
      return;
    }
    addItem({ menuitemid: item.id, name_eng: item.name_eng, price: item.price });
    toast.success(`${item.name_eng} added`, { duration: 1500 });
  };

  const submitFeedback = async () => {
    if (!feedbackForm.fullname.trim()) return toast.error('Please enter your name');
    setFeedbackLoading(true);
    try {
      await api.post(`/customer/restro/${slug}/feedback`, feedbackForm);
      toast.success('Thank you for your feedback! 🙏');
      setFeedbackOpen(false);
      setFeedbackForm({ fullname: '', mobile: '', email: '', feedback: '', dob: '' });
      setRating(0);
    } catch (e) {
      toast.error(e.response?.data?.error || 'Failed to submit');
    } finally { setFeedbackLoading(false); }
  };

  const handleWaiterClick = async () => {
    if (waiterDone || waiterLoading) return;
    setWaiterLoading(true);
    try {
      await api.post(`/customer/restro/${slug}/waiter`, { tableid });
      toast.success('🔔 Waiter is on the way!', { duration: 5000 });
      setWaiterDone(true);
      setTimeout(() => setWaiterDone(false), 30000);
    } catch (e) {
      toast.error(e.response?.data?.error || 'Failed to call waiter');
    } finally { setWaiterLoading(false); }
  };

  if (restroLoading || menuLoading) return <PageLoader />;
  if (!restro) return <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: th.bg }}>Restaurant not found</div>;

  const allItems = categories.flatMap((c) => c.menuItems);
  const filtered = search ? allItems.filter((i) => i[lang]?.toLowerCase().includes(search.toLowerCase())) : null;
  const activeCatItems = filtered
    ? filtered
    : activecat === 'all'
      ? allItems
      : categories.find((c) => c.id === activecat)?.menuItems || [];

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: th.bg, fontFamily: `'${th.font}', sans-serif`, color: th.text }}>

      {/* Navbar */}
      <div className="sticky top-0 z-10 shadow-sm" style={{ backgroundColor: th.navBg }}>
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {restro.logo && <img src={restro.logo.startsWith('http') ? restro.logo : `${API}${restro.logo}`} alt={restro.restroname} className="w-9 h-9 object-cover shadow-sm" style={{ borderRadius: th.radius }} />}
            <div>
              <h1 className="font-bold text-sm" style={{ color: th.text }}>{restro.restroname}</h1>
              {tableid && <p className="text-xs opacity-60" style={{ color: th.text }}>Table #{tableid}</p>}
            </div>
          </div>
          <button className="relative p-2" style={{ backgroundColor: `${th.primary}15`, borderRadius: th.radius }} onClick={() => navigate(`/menu/${slug}/cart${tableid ? `?table=${tableid}` : ''}`)}>
            <ShoppingCart size={20} style={{ color: th.primary }} />
            {count() > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 text-xs font-bold flex items-center justify-center" style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: '999px' }}>{count()}</span>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 pb-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" style={{ color: th.text }} />
            <input className="w-full pl-8 pr-8 py-2 text-sm outline-none border" placeholder="Search menu..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{ backgroundColor: `${th.text}08`, borderColor: `${th.text}15`, borderRadius: th.radius, color: th.text }} />
            {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40"><X size={14} style={{ color: th.text }} /></button>}
          </div>
        </div>
      </div>

      <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4">
        {/* Lang + actions */}
        <div className="flex items-center justify-between py-3 gap-2">
          <div className="flex gap-0.5 p-0.5 rounded-lg" style={{ backgroundColor: `${th.text}10` }}>
            {LANGS.map(({ key, label }) => (
              <button key={key} onClick={() => setLang(key)} className="px-3 py-1 text-xs font-semibold transition-all"
                style={{ backgroundColor: lang === key ? th.primary : 'transparent', color: lang === key ? th.btnText : th.text, borderRadius: `calc(${th.radius} - 2px)` }}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {restro.pdf && (
              <a href={restro.pdf.startsWith('http') ? restro.pdf : `${API}${restro.pdf}`} download
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border"
                style={{ borderColor: `${th.primary}40`, color: th.primary, borderRadius: th.radius }}>
                <Download size={11} /> PDF
              </a>
            )}
            {/* Feedback button */}
            <button
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border transition-all"
              onClick={() => setFeedbackOpen(true)}
              style={{ borderColor: `${th.primary}40`, color: th.primary, borderRadius: th.radius }}>
              <MessageSquare size={11} /> Feedback
            </button>
            {/* Waiter button */}
            <button
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border transition-all"
              onClick={handleWaiterClick}
              disabled={waiterLoading || waiterDone}
              style={{
                borderColor: waiterDone ? '#16a34a40' : `${th.primary}40`,
                color: waiterDone ? '#16a34a' : th.primary,
                borderRadius: th.radius,
                opacity: waiterLoading ? 0.6 : 1,
              }}>
              {waiterLoading ? <><Bell size={11} /> Calling...</>
                : waiterDone  ? <>✓ Called</>
                : <><Bell size={11} /> {tableid ? 'Call Waiter' : 'Waiter'}</>}
            </button>
          </div>
        </div>

        {/* No-table banner */}
        {!canOrder && (
          <div className="mx-0 mb-3 px-4 py-3 flex items-center gap-3 text-sm font-medium"
            style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>
            <span className="text-lg">📱</span>
            <span>Browse our menu below. <strong>Scan the QR code at your table</strong> to place an order.</span>
          </div>
        )}

        {/* Category tabs */}
        {!search && (
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-none">

            {/* All tab */}
            <button onClick={() => setActivecat('all')}
              className="shrink-0 px-4 py-2 text-sm font-semibold transition-all"
              style={{
                backgroundColor: activecat === 'all' ? th.primary : th.card,
                color: activecat === 'all' ? th.btnText : th.text,
                borderRadius: th.radius,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}>
              All ({allItems.length})
            </button>

            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActivecat(cat.id)}
                className="shrink-0 px-4 py-2 text-sm font-semibold transition-all"
                style={{
                  backgroundColor: activecat === cat.id ? th.primary : th.card,
                  color: activecat === cat.id ? th.btnText : th.text,
                  borderRadius: th.radius,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                }}>
                {cat[lang] || cat.name_eng}
              </button>
            ))}
          </div>
        )}

        {/* Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 mt-1">
          {activeCatItems.map((item) => {
            const qty = getQty(item.id);
            const imgSrc = item.image ? (item.image.startsWith('http') ? item.image : `${API}${item.image}`) : null;
            return (
              <div key={item.id} className="flex gap-3 p-3 shadow-sm" style={{ backgroundColor: th.card, borderRadius: th.radius }}>
                {imgSrc ? (
                  <img src={imgSrc} alt={item.name_eng} className="w-20 h-20 object-cover shrink-0" style={{ borderRadius: `calc(${th.radius} - 4px)` }} />
                ) : (
                  <div className="w-20 h-20 shrink-0 flex items-center justify-center text-2xl" style={{ backgroundColor: `${th.bg}`, borderRadius: `calc(${th.radius} - 4px)` }}>🍽️</div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="font-semibold text-sm" style={{ color: th.text }}>{item[lang] || item.name_eng}</p>
                      <span className="inline-flex items-center gap-1 text-xs mt-0.5" style={{ color: item.veg ? '#16a34a' : '#dc2626' }}>
                        {item.veg ? <Leaf size={10} /> : <Drumstick size={10} />} {item.veg ? 'Veg' : 'Non-veg'}
                      </span>
                    </div>
                    <p className="font-bold text-sm shrink-0" style={{ color: th.primary }}>₹{item.price}</p>
                  </div>
                  <div className="mt-2">
                    {qty === 0 ? (
                      <button onClick={() => handleAdd(item)}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold transition-all"
                        style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: th.radius }}>
                        <Plus size={12} /> Add
                      </button>
                    ) : (
                      <div className="inline-flex items-center gap-2 p-1" style={{ backgroundColor: `${th.primary}15`, borderRadius: th.radius }}>
                        <button className="w-7 h-7 flex items-center justify-center shadow-sm" onClick={() => updateQty(item.id, qty - 1)}
                          style={{ backgroundColor: th.card, borderRadius: `calc(${th.radius} - 4px)` }}>
                          <Minus size={12} style={{ color: th.text }} />
                        </button>
                        <span className="w-5 text-center text-sm font-bold" style={{ color: th.primary }}>{qty}</span>
                        <button className="w-7 h-7 flex items-center justify-center" onClick={() => updateQty(item.id, qty + 1)}
                          style={{ backgroundColor: th.primary, borderRadius: `calc(${th.radius} - 4px)` }}>
                          <Plus size={12} style={{ color: th.btnText }} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {search && !activeCatItems.length && (
            <div className="text-center py-16 opacity-50 lg:col-span-2 2xl:col-span-3" style={{ color: th.text }}>No items match "{search}"</div>
          )}
        </div>
      </div>


      {/* Feedback Modal */}
      <Modal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} title="Share Your Feedback" size="sm">
        <div className="space-y-3">
          {/* Star rating */}
          <div>
            <p className="text-sm text-gray-500 mb-2">How was your experience?</p>
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <button key={star} onClick={() => setRating(star)} className="transition-transform hover:scale-110">
                  <Star size={28} fill={star <= rating ? '#f59e0b' : 'none'} stroke={star <= rating ? '#f59e0b' : '#d1d5db'} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="label">Your Name *</label>
            <input className="input" placeholder="Enter your name" value={feedbackForm.fullname}
              onChange={(e) => setFeedbackForm({ ...feedbackForm, fullname: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Mobile</label>
              <input className="input" placeholder="10-digit number" value={feedbackForm.mobile}
                onChange={(e) => setFeedbackForm({ ...feedbackForm, mobile: e.target.value })} />
            </div>
            <div>
              <label className="label">Birthday</label>
              <input className="input" type="date" value={feedbackForm.dob}
                onChange={(e) => setFeedbackForm({ ...feedbackForm, dob: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="label">Email (optional)</label>
            <input className="input" type="email" placeholder="your@email.com" value={feedbackForm.email}
              onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })} />
          </div>
          <div>
            <label className="label">Message</label>
            <textarea className="input" rows={3} placeholder="Tell us about your experience..."
              value={feedbackForm.feedback} onChange={(e) => setFeedbackForm({ ...feedbackForm, feedback: e.target.value })} />
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="btn-secondary flex-1" onClick={() => setFeedbackOpen(false)}>Cancel</button>
          <button className="flex-1 py-2 text-sm font-bold rounded-lg" onClick={submitFeedback} disabled={feedbackLoading}
            style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: th.radius }}>
            {feedbackLoading ? 'Submitting...' : '🙏 Submit'}
          </button>
        </div>
      </Modal>

      {/* Fixed cart bar — only when ordered via QR */}
      {canOrder && count() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-3 z-10" style={{ backgroundColor: th.navBg, borderTop: `1px solid ${th.primary}20` }}>
          <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            <button className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold shadow-lg"
              style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: th.radius }}
              onClick={() => navigate(`/menu/${slug}/cart${tableid ? `?table=${tableid}` : ''}`)}>
              <ShoppingCart size={16} />
              View Cart ({count()} items) · ₹{useCartStore.getState().total()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
