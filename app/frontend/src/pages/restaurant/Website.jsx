import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { useTheme } from '../../hooks/useTheme';
import { PageLoader } from '../../components/ui/Spinner';
import {
  Phone, MapPin, Clock, ExternalLink,
  UtensilsCrossed, ArrowRight, MessageCircle, Leaf, Drumstick
} from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const API = import.meta.env.VITE_API_URL?.replace('/api', '') || '';

const DAYS = ['mon','tue','wed','thu','fri','sat','sun'];
const DAY_LABELS = { mon:'Monday', tue:'Tuesday', wed:'Wednesday', thu:'Thursday', fri:'Friday', sat:'Saturday', sun:'Sunday' };

export default function RestaurantWebsite() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['website', slug],
    queryFn: () => api.get(`/website/${slug}`).then((r) => r.data),
    retry: false,
  });

  const th = useTheme(data?.theme);

  if (isLoading) return <PageLoader />;

  // Coming soon / not enabled
  if (error?.response?.status === 404 && error?.response?.data?.comingSoon) {
    const r = error.response.data.restro;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        {r?.logo && <img src={r.logo} alt={r.restroname} className="w-20 h-20 rounded-2xl object-cover mb-4 shadow" />}
        <h1 className="text-3xl font-black text-gray-900 mb-2">{r?.restroname}</h1>
        <p className="text-gray-500 text-lg mb-6">Our website is coming soon!</p>
        <button onClick={() => navigate(`/menu/${slug}`)} className="btn-primary btn-lg">
          View Our Menu →
        </button>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-5xl mb-4">🍽️</p>
          <p className="text-xl font-bold text-gray-700">Restaurant not found</p>
          <button onClick={() => navigate('/')} className="btn-primary mt-4">Go Home</button>
        </div>
      </div>
    );
  }

  const hours = (() => { try { return JSON.parse(data.openingHours || '{}'); } catch { return {}; } })();
  const gallery = (() => { try { return JSON.parse(data.galleryImages || '[]'); } catch { return []; } })();
  const menuUrl = `/menu/${slug}`;
  const logoSrc = data.logo?.startsWith('http') ? data.logo : data.logo ? `${API}${data.logo}` : null;
  const bannerSrc = data.bannerImage?.startsWith('http') ? data.bannerImage : data.bannerImage ? `${API}${data.bannerImage}` : null;

  return (
    <div style={{ fontFamily: `'${th.font}', sans-serif`, backgroundColor: th.bg, color: th.text }}>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: th.navBg }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {logoSrc
              ? <img src={logoSrc} alt={data.restroname} className="w-10 h-10 rounded-xl object-cover" />
              : <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: th.primary }}><UtensilsCrossed className="text-white" size={18} /></div>
            }
            <span className="font-black text-lg" style={{ color: th.text }}>{data.restroname}</span>
          </div>
          <div className="flex items-center gap-3">
            {data.phone && (
              <a href={`tel:${data.phone}`} className="hidden sm:flex items-center gap-1 text-sm font-medium" style={{ color: th.primary }}>
                <Phone size={14} /> {data.phone}
              </a>
            )}
            <button onClick={() => navigate(menuUrl)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
              style={{ backgroundColor: th.primary, color: th.btnText }}>
              View Menu <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: bannerSrc ? undefined : th.primary }}>
        {bannerSrc && (
          <>
            <img src={bannerSrc} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
        <div className="relative z-10 text-center px-6 py-20">
          {logoSrc && <img src={logoSrc} alt={data.restroname} className="w-20 h-20 rounded-2xl object-cover mx-auto mb-6 shadow-2xl" />}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">{data.restroname}</h1>
          {data.tagline && <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">{data.tagline}</p>}
          <button onClick={() => navigate(menuUrl)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:opacity-90 transition-all"
            style={{ backgroundColor: th.primary, color: th.btnText }}>
            View Full Menu <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── About ── */}
      {data.aboutText && (
        <section className="py-20 px-6" style={{ backgroundColor: th.bg }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6" style={{ color: th.text }}>About Us</h2>
            <p className="text-lg leading-relaxed opacity-80" style={{ color: th.text }}>{data.aboutText}</p>
          </div>
        </section>
      )}

      {/* ── Menu Preview ── */}
      {data.categories?.length > 0 && (
        <section className="py-20 px-6" style={{ backgroundColor: th.cardColor }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-2" style={{ color: th.text }}>Our Menu</h2>
              <p className="opacity-60" style={{ color: th.text }}>A taste of what we offer</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.categories.flatMap((c) => c.menuItems).slice(0, 6).map((item) => {
                const imgSrc = item.image?.startsWith('http') ? item.image : item.image ? `${API}${item.image}` : null;
                return (
                  <div key={item.id} className="rounded-2xl overflow-hidden shadow-sm flex gap-3 p-3" style={{ backgroundColor: th.bg }}>
                    {imgSrc
                      ? <img src={imgSrc} alt={item.name_eng} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                      : <div className="w-16 h-16 rounded-xl shrink-0 flex items-center justify-center text-2xl" style={{ backgroundColor: th.cardColor }}>🍽️</div>
                    }
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate" style={{ color: th.text }}>{item.name_eng}</p>
                      <span className="inline-flex items-center gap-1 text-xs mt-0.5" style={{ color: item.veg ? '#16a34a' : '#dc2626' }}>
                        {item.veg ? <Leaf size={10} /> : <Drumstick size={10} />} {item.veg ? 'Veg' : 'Non-veg'}
                      </span>
                      <p className="font-bold mt-1" style={{ color: th.primary }}>₹{item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <button onClick={() => navigate(menuUrl)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: th.primary, color: th.btnText }}>
                View Full Menu <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {gallery.length > 0 && (
        <section className="py-20 px-6" style={{ backgroundColor: th.bg }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-10" style={{ color: th.text }}>Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {gallery.map((url, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                  <img src={url.startsWith('http') ? url : `${API}${url}`} alt={`Gallery ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Hours + Contact ── */}
      <section className="py-20 px-6" style={{ backgroundColor: th.cardColor }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Opening Hours */}
          {Object.keys(hours).length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={20} style={{ color: th.primary }} />
                <h2 className="text-2xl font-black" style={{ color: th.text }}>Opening Hours</h2>
              </div>
              <div className="space-y-2">
                {DAYS.map((day) => {
                  const h = hours[day];
                  const today = new Date().toLocaleDateString('en', { weekday: 'short' }).toLowerCase().slice(0,3);
                  const isToday = today === day;
                  return (
                    <div key={day} className={`flex justify-between py-2.5 px-3 rounded-xl ${isToday ? 'font-bold' : ''}`}
                      style={{ backgroundColor: isToday ? `${th.primary}15` : 'transparent', color: th.text }}>
                      <span className={isToday ? 'font-bold' : 'opacity-70'} style={{ color: isToday ? th.primary : th.text }}>
                        {DAY_LABELS[day]}
                      </span>
                      <span style={{ color: h?.closed ? '#ef4444' : th.text }}>
                        {h?.closed ? 'Closed' : h?.open && h?.close ? `${h.open} – ${h.close}` : '—'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Phone size={20} style={{ color: th.primary }} />
              <h2 className="text-2xl font-black" style={{ color: th.text }}>Contact Us</h2>
            </div>
            <div className="space-y-4">
              {(data.phone || data.mobileno) && (
                <a href={`tel:${data.phone || data.mobileno}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${th.primary}15` }}>
                    <Phone size={18} style={{ color: th.primary }} />
                  </div>
                  <span style={{ color: th.text }}>{data.phone || data.mobileno}</span>
                </a>
              )}
              {data.whatsapp && (
                <a href={`https://wa.me/${data.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-100">
                    <MessageCircle size={18} className="text-green-600" />
                  </div>
                  <span style={{ color: th.text }}>WhatsApp Us</span>
                </a>
              )}
              {data.address && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${th.primary}15` }}>
                    <MapPin size={18} style={{ color: th.primary }} />
                  </div>
                  <span className="opacity-80" style={{ color: th.text }}>{data.address}</span>
                </div>
              )}
              {/* Social links */}
              <div className="flex gap-3 pt-2">
                {data.instagramUrl && (
                  <a href={data.instagramUrl} target="_blank" rel="noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ background: 'linear-gradient(135deg,#f97316,#ec4899,#8b5cf6)' }}>
                    <InstagramIcon />
                  </a>
                )}
                {data.facebookUrl && (
                  <a href={data.facebookUrl} target="_blank" rel="noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity">
                    <FacebookIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      {data.mapEmbed && (
        <section className="h-80" style={{ backgroundColor: th.bg }}>
          <iframe src={data.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="py-8 px-6 text-center border-t" style={{ backgroundColor: th.navBg, borderColor: `${th.text}10` }}>
        <div className="flex flex-col items-center gap-3">
          <span className="font-black" style={{ color: th.text }}>{data.restroname}</span>
          <button onClick={() => navigate(menuUrl)}
            className="inline-flex items-center gap-1 text-sm font-medium hover:opacity-80"
            style={{ color: th.primary }}>
            View Menu <ExternalLink size={13} />
          </button>
          <p className="text-xs opacity-40" style={{ color: th.text }}>Powered by Q-Menu</p>
        </div>
      </footer>
    </div>
  );
}
