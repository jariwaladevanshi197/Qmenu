import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { useCartStore } from '../../store/cart';
import { useTheme } from '../../hooks/useTheme';
import toast from 'react-hot-toast';
import { PageLoader } from '../../components/ui/Spinner';
import Modal from '../../components/ui/Modal';
import { ShoppingCart, Search, Plus, Minus, Download, Bell, X, MessageSquare, Star, ChevronLeft } from 'lucide-react';

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
  const showingCategories = !search && activecat === null;
  const currentCatLabel = activecat === 'all'
    ? `All Items`
    : categories.find((c) => c.id === activecat)?.[lang] || categories.find((c) => c.id === activecat)?.name_eng || '';
  const goBack = () => { setActivecat(null); setSearch(''); };

  return (
    <div className="min-h-screen pb-28" style={{ backgroundColor: th.bg, fontFamily: `'${th.font}', sans-serif`, color: th.text }}>

      {/* Header */}
      <div className="sticky top-0 z-10 shadow-sm" style={{ backgroundColor: th.navBg }}>
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {restro.logo && <img src={restro.logo.startsWith('http') ? restro.logo : `${API}${restro.logo}`} alt={restro.restroname} className="w-11 h-11 object-cover shrink-0 shadow-sm" style={{ borderRadius: th.radius }} />}
            <div>
              <h1 className="font-extrabold text-base leading-tight" style={{ color: th.text }}>{restro.restroname}</h1>
              {tableid && (
                <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] font-bold" style={{ backgroundColor: `${th.primary}18`, color: th.primary, borderRadius: '999px' }}>
                  TABLE {tableid}
                </span>
              )}
            </div>
          </div>
          <button className="relative w-11 h-11 flex items-center justify-center shrink-0 shadow-md" style={{ backgroundColor: th.primary, borderRadius: '999px' }} onClick={() => navigate(`/menu/${slug}/cart${tableid ? `?table=${tableid}` : ''}`)}>
            <ShoppingCart size={19} style={{ color: th.btnText }} />
            {count() > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 text-[10px] font-bold flex items-center justify-center border-2" style={{ backgroundColor: th.accent, color: '#1f2937', borderRadius: '999px', borderColor: th.navBg }}>{count()}</span>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4 pb-3">
          <div className="relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40" style={{ color: th.text }} />
            <input className="w-full pl-10 pr-8 py-2.5 text-sm outline-none border-0 font-medium" placeholder="Search for dishes..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{ backgroundColor: `${th.text}08`, borderRadius: '999px', color: th.text }} />
            {search && <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-40"><X size={14} style={{ color: th.text }} /></button>}
          </div>
        </div>
      </div>

      <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-4">
        {/* Lang + actions */}
        <div className="flex items-center justify-between py-3 gap-2 flex-wrap">
          <div className="flex gap-0.5 p-0.5" style={{ backgroundColor: `${th.text}10`, borderRadius: '999px' }}>
            {LANGS.map(({ key, label }) => (
              <button key={key} onClick={() => setLang(key)} className="px-3 py-1 text-xs font-bold transition-all"
                style={{ backgroundColor: lang === key ? th.primary : 'transparent', color: lang === key ? th.btnText : th.text, borderRadius: '999px' }}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {restro.pdf && (
              <a href={restro.pdf.startsWith('http') ? restro.pdf : `${API}${restro.pdf}`} download
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold shadow-sm"
                style={{ backgroundColor: th.card, color: th.primary, borderRadius: '999px' }}>
                <Download size={12} /> PDF
              </a>
            )}
            <button
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold shadow-sm transition-all"
              onClick={() => setFeedbackOpen(true)}
              style={{ backgroundColor: th.card, color: th.primary, borderRadius: '999px' }}>
              <MessageSquare size={12} /> Feedback
            </button>
            <button
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold shadow-sm transition-all"
              onClick={handleWaiterClick}
              disabled={waiterLoading || waiterDone}
              style={{
                backgroundColor: waiterDone ? '#dcfce7' : th.card,
                color: waiterDone ? '#16a34a' : th.primary,
                borderRadius: '999px',
                opacity: waiterLoading ? 0.6 : 1,
              }}>
              {waiterLoading ? <><Bell size={12} /> Calling...</>
                : waiterDone  ? <>✓ Called</>
                : <><Bell size={12} /> {tableid ? 'Call Waiter' : 'Waiter'}</>}
            </button>
          </div>
        </div>

        {/* No-table banner */}
        {!canOrder && (
          <div className="mb-3 px-4 py-3 flex items-center gap-3 text-sm font-semibold shadow-sm"
            style={{ backgroundColor: '#fef3c7', color: '#92400e', borderRadius: th.radius }}>
            <span className="text-lg">📱</span>
            <span>Browse our menu below. <strong>Scan the QR code at your table</strong> to place an order.</span>
          </div>
        )}

        {/* Category cards — browse by category */}
        {showingCategories && (
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-1">
            <button onClick={() => setActivecat('all')}
              className="relative flex flex-col shadow-md overflow-hidden transition-transform hover:-translate-y-0.5 text-left"
              style={{ backgroundColor: th.card, borderRadius: th.radius }}>
              <div className="relative w-full aspect-[4/3] flex items-center justify-center text-4xl"
                style={{ background: `linear-gradient(135deg, ${th.primary}30, ${th.accent}35)` }}>
                🍴
              </div>
              <div className="p-3">
                <p className="font-bold text-sm leading-snug" style={{ color: th.text }}>All Items</p>
                <p className="text-xs mt-0.5 opacity-60" style={{ color: th.text }}>{allItems.length} dishes</p>
              </div>
            </button>
            {categories.map((cat) => {
              // Priority: admin-uploaded category image → chosen icon → a preview photo from one of its items → generic plate
              const catImgSrc = cat.image ? (cat.image.startsWith('http') ? cat.image : `${API}${cat.image}`) : null;
              const itemPreview = !catImgSrc && !cat.icon ? cat.menuItems.find((i) => i.image) : null;
              const itemImgSrc = itemPreview ? (itemPreview.image.startsWith('http') ? itemPreview.image : `${API}${itemPreview.image}`) : null;
              return (
                <button key={cat.id} onClick={() => setActivecat(cat.id)}
                  className="relative flex flex-col shadow-md overflow-hidden transition-transform hover:-translate-y-0.5 text-left"
                  style={{ backgroundColor: th.card, borderRadius: th.radius }}>
                  <div className="relative w-full aspect-[4/3]">
                    {catImgSrc ? (
                      <img src={catImgSrc} alt={cat.name_eng} className="w-full h-full object-cover" />
                    ) : cat.icon ? (
                      <div className="w-full h-full flex items-center justify-center text-5xl" style={{ background: `linear-gradient(135deg, ${th.primary}20, ${th.accent}25)` }}>{cat.icon}</div>
                    ) : itemImgSrc ? (
                      <img src={itemImgSrc} alt={cat.name_eng} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl" style={{ background: `linear-gradient(135deg, ${th.primary}20, ${th.accent}25)` }}>🍽️</div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-sm leading-snug line-clamp-1" style={{ color: th.text }}>{cat[lang] || cat.name_eng}</p>
                    <p className="text-xs mt-0.5 opacity-60" style={{ color: th.text }}>{cat.menuItems.length} {cat.menuItems.length === 1 ? 'dish' : 'dishes'}</p>
                  </div>
                </button>
              );
            })}
            {!categories.length && (
              <div className="text-center py-16 opacity-50 col-span-2 lg:col-span-3 2xl:col-span-4" style={{ color: th.text }}>No categories yet</div>
            )}
          </div>
        )}

        {/* Items view — back to categories + image-forward card grid */}
        {!showingCategories && (
          <>
            <button onClick={goBack} className="flex items-center gap-1.5 mb-3 text-sm font-bold" style={{ color: th.primary }}>
              <ChevronLeft size={18} /> {search ? 'Back to categories' : currentCatLabel}
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {activeCatItems.map((item) => {
                const qty = getQty(item.id);
                const imgSrc = item.image ? (item.image.startsWith('http') ? item.image : `${API}${item.image}`) : null;
                return (
                  <div key={item.id} className="relative flex flex-col shadow-md overflow-hidden transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: th.card, borderRadius: th.radius }}>
                    {/* Image */}
                    <div className="relative w-full aspect-square">
                      {imgSrc ? (
                        <img src={imgSrc} alt={item.name_eng} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl" style={{ background: `linear-gradient(135deg, ${th.primary}20, ${th.accent}25)` }}>🍽️</div>
                      )}
                      {/* Veg/non-veg badge */}
                      <div className="absolute top-2 left-2 w-4 h-4 flex items-center justify-center bg-white shadow" style={{ borderRadius: '4px', border: `1.5px solid ${item.veg ? '#16a34a' : '#dc2626'}` }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.veg ? '#16a34a' : '#dc2626' }} />
                      </div>
                      {/* Floating add / stepper */}
                      <div className="absolute -bottom-4 right-2">
                        {qty === 0 ? (
                          <button onClick={() => handleAdd(item)}
                            className="flex items-center justify-center gap-1 px-4 h-8 text-xs font-extrabold shadow-lg transition-transform active:scale-95"
                            style={{ backgroundColor: th.card, color: th.primary, borderRadius: '999px', border: `1.5px solid ${th.primary}` }}>
                            <Plus size={13} /> ADD
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 px-1.5 h-8 shadow-lg" style={{ backgroundColor: th.primary, borderRadius: '999px' }}>
                            <button className="w-5 h-5 flex items-center justify-center" onClick={() => updateQty(item.id, qty - 1)}>
                              <Minus size={13} style={{ color: th.btnText }} />
                            </button>
                            <span className="w-3 text-center text-xs font-bold" style={{ color: th.btnText }}>{qty}</span>
                            <button className="w-5 h-5 flex items-center justify-center" onClick={() => updateQty(item.id, qty + 1)}>
                              <Plus size={13} style={{ color: th.btnText }} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-3 pt-5">
                      <p className="font-bold text-sm leading-snug line-clamp-2" style={{ color: th.text }}>{item[lang] || item.name_eng}</p>
                      <p className="font-extrabold text-base mt-1.5" style={{ color: th.primary }}>₹{item.price}</p>
                    </div>
                  </div>
                );
              })}
              {!activeCatItems.length && (
                <div className="text-center py-16 opacity-50 col-span-2 lg:col-span-3 2xl:col-span-4" style={{ color: th.text }}>
                  {search ? `No items match "${search}"` : 'No items in this category'}
                </div>
              )}
            </div>
          </>
        )}
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
        <div className="fixed bottom-0 left-0 right-0 p-4 z-10">
          <div className="max-w-2xl lg:max-w-3xl mx-auto">
            <button className="w-full py-3.5 flex items-center justify-between px-5 text-sm shadow-xl transition-transform active:scale-[0.98]"
              style={{ backgroundColor: th.primary, color: th.btnText, borderRadius: '999px' }}
              onClick={() => navigate(`/menu/${slug}/cart${tableid ? `?table=${tableid}` : ''}`)}>
              <span className="flex items-center gap-2 font-bold">
                <ShoppingCart size={16} />
                {count()} {count() === 1 ? 'item' : 'items'} added
              </span>
              <span className="flex items-center gap-1.5 font-extrabold">
                View Cart · ₹{useCartStore.getState().total()}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
