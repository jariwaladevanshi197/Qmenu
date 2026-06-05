import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../../lib/api';
import { useTheme } from '../../hooks/useTheme';
import { PageLoader } from '../../components/ui/Spinner';
import {
  Phone, MapPin, Clock, ExternalLink, UtensilsCrossed,
  ArrowRight, MessageCircle, Leaf, ChevronRight, Star
} from 'lucide-react';

const API = import.meta.env.VITE_API_URL?.replace('/api', '') || '';
const DAYS = ['mon','tue','wed','thu','fri','sat','sun'];
const DAY_LABELS = { mon:'Mon', tue:'Tue', wed:'Wed', thu:'Thu', fri:'Fri', sat:'Sat', sun:'Sun' };

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

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

  // Coming soon
  if (error?.response?.status === 404 && error?.response?.data?.comingSoon) {
    const r = error.response.data.restro;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 p-6">
        {r?.logo && <img src={r.logo} alt={r.restroname} className="w-24 h-24 rounded-2xl object-cover mb-6 shadow-2xl" />}
        <h1 className="text-4xl font-black text-white mb-3">{r?.restroname}</h1>
        <p className="text-gray-400 text-lg mb-8">Our website is coming soon ✨</p>
        <button onClick={() => navigate(`/menu/${slug}`)}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-lg"
          style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
          View Our Menu <ArrowRight size={18} />
        </button>
      </div>
    );
  }

  if (error || !data) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center"><p className="text-6xl mb-4">🍽️</p><p className="text-xl font-bold">Restaurant not found</p></div>
    </div>
  );

  const hours = (() => { try { return JSON.parse(data.openingHours || '{}'); } catch { return {}; } })();
  const gallery = (() => { try { return JSON.parse(data.galleryImages || '[]'); } catch { return []; } })();
  const menuItems = data.categories?.flatMap((c) => c.menuItems) || [];
  const menuUrl = `/menu/${slug}`;
  const logoSrc = data.logo?.startsWith('http') ? data.logo : data.logo ? `${API}${data.logo}` : null;
  const bannerSrc = data.bannerImage?.startsWith('http') ? data.bannerImage : data.bannerImage ? `${API}${data.bannerImage}` : null;
  const r = radiusPx[data?.theme?.borderRadius] || '14px';

  return (
    <div style={{ fontFamily: `'${th.font}', sans-serif` }} className="overflow-x-hidden">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
        style={{ backgroundColor: th.navBg + 'ee', borderColor: th.text + '10' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {logoSrc
              ? <img src={logoSrc} alt={data.restroname} className="w-10 h-10 rounded-xl object-cover shadow-sm" />
              : <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: th.primary }}>
                  <UtensilsCrossed className="text-white" size={18} />
                </div>
            }
            <span className="font-black text-lg tracking-tight" style={{ color: th.text }}>{data.restroname}</span>
          </div>
          <div className="flex items-center gap-3">
            {data.phone && (
              <a href={`tel:${data.phone}`} className="hidden md:flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg border transition-colors"
                style={{ color: th.primary, borderColor: th.primary + '30', backgroundColor: th.primary + '08' }}>
                <Phone size={13} /> {data.phone}
              </a>
            )}
            <button onClick={() => navigate(menuUrl)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: th.primary, color: th.btnText }}>
              Order Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {bannerSrc ? (
          <>
            <img src={bannerSrc} alt="Hero" className="absolute inset-0 w-full h-full object-cover scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.85) 100%)' }} />
          </>
        ) : (
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${th.primary}dd, ${th.secondary}ff)` }} />
        )}

        <div className="relative z-10 text-center px-6 pt-28 pb-28 max-w-4xl mx-auto">
          {logoSrc && (
            <img src={logoSrc} alt={data.restroname}
              className="w-20 h-20 rounded-2xl object-cover shadow-2xl border-2 border-white/30 mx-auto mb-6" />
          )}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
            <Star size={11} fill="white" /> Premium Dining Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight tracking-tight drop-shadow-2xl">
            {data.heroTitle || data.restroname}
          </h1>
          {data.tagline && (
            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl mx-auto leading-relaxed font-light italic">
              "{data.tagline}"
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href={`#menu`}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
              style={{ backgroundColor: th.primary, color: th.btnText }}>
              View Menu <ArrowRight size={18} />
            </a>
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 transition-all">
                <MessageCircle size={18} /> Reserve a Table
              </a>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 border-b" style={{ backgroundColor: th.cardColor, borderColor: th.text + '10' }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: menuItems.length + '+', label: 'Menu Items' },
            { num: data.categories?.length + '+', label: 'Categories' },
            { num: '100%', label: 'Fresh Daily' },
            { num: '5★', label: 'Rated' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl font-black mb-1" style={{ color: th.primary }}>{num}</p>
              <p className="text-sm font-medium opacity-60" style={{ color: th.text }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      {data.aboutText && (
        <section className="py-24 px-6" style={{ backgroundColor: th.bg }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: th.primary }}>Our Story</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: th.text }}>
                About<br />{data.restroname}
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: th.text, opacity: 0.7 }}>{data.aboutText}</p>
              <button onClick={() => navigate(menuUrl)}
                className="flex items-center gap-2 text-sm font-bold group"
                style={{ color: th.primary }}>
                See Our Menu <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              {(() => {
                const aboutSrc = data.aboutImage?.startsWith('http') ? data.aboutImage : data.aboutImage ? `${API}${data.aboutImage}` : null;
                const displaySrc = aboutSrc || logoSrc;
                return displaySrc ? (
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl opacity-20" style={{ backgroundColor: th.primary }} />
                    <img src={displaySrc} alt="About" className="relative w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover aspect-square" />
                  </div>
                ) : (
                  <div className="w-full aspect-square rounded-3xl flex items-center justify-center text-8xl" style={{ backgroundColor: th.primary + '15' }}>🍽️</div>
                );
              })()}
            </div>
          </div>
        </section>
      )}

      {/* ── Menu Preview ── */}
      {menuItems.length > 0 && (
        <section className="py-24 px-6" style={{ backgroundColor: th.cardColor }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" id="menu">
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: th.primary }}>What We Serve</span>
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: th.text }}>Our Specialities</h2>
              <p className="opacity-60 max-w-lg mx-auto" style={{ color: th.text }}>Visit us or scan the table QR to place your order</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.slice(0, 6).map((item) => {
                const imgSrc = item.image?.startsWith('http') ? item.image : item.image ? `${API}${item.image}` : null;
                return (
                  <div key={item.id} className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: th.bg }}>
                    <div className="relative h-48 overflow-hidden">
                      {imgSrc
                        ? <img src={imgSrc} alt={item.name_eng} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        : <div className="w-full h-full flex items-center justify-center text-5xl" style={{ backgroundColor: th.primary + '10' }}>🍽️</div>
                      }
                      <div className="absolute top-3 left-3">
                        <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: item.veg ? '#dcfce7' : '#fee2e2', color: item.veg ? '#15803d' : '#b91c1c' }}>
                          {item.veg ? <Leaf size={10} /> : '🍗'} {item.veg ? 'Veg' : 'Non-Veg'}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-base mb-1" style={{ color: th.text }}>{item.name_eng}</h3>
                      {item.name_guj && <p className="text-xs opacity-50 mb-3" style={{ color: th.text }}>{item.name_guj}</p>}
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black" style={{ color: th.primary }}>₹{item.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <button onClick={() => navigate(menuUrl)}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                style={{ backgroundColor: th.primary, color: th.btnText }}>
                View Full Menu <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {gallery.length > 0 && (
        <section className="py-24 px-6" style={{ backgroundColor: th.bg }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: th.primary }}>Moments</span>
              <h2 className="text-4xl md:text-5xl font-black" style={{ color: th.text }}>Our Gallery</h2>
            </div>
            <div className={`grid gap-4 ${gallery.length >= 5 ? 'grid-cols-2 md:grid-cols-3' : gallery.length >= 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2'}`}>
              {gallery.map((url, i) => (
                <div key={i} className={`rounded-3xl overflow-hidden group ${i === 0 && gallery.length >= 3 ? 'row-span-2' : ''}`}>
                  <img src={url.startsWith('http') ? url : `${API}${url}`} alt={`Gallery ${i+1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: i === 0 && gallery.length >= 3 ? '400px' : '200px' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Hours + Contact ── */}
      <section className="py-24 px-6" style={{ backgroundColor: th.cardColor }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: th.primary }}>Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: th.text }}>Find Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Hours */}
            {Object.keys(hours).length > 0 && (
              <div className="rounded-3xl p-8" style={{ backgroundColor: th.bg }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: th.primary + '15' }}>
                    <Clock size={18} style={{ color: th.primary }} />
                  </div>
                  <h3 className="font-black text-xl" style={{ color: th.text }}>Opening Hours</h3>
                </div>
                <div className="space-y-1">
                  {DAYS.map((day) => {
                    const h = hours[day];
                    const todayKey = ['sun','mon','tue','wed','thu','fri','sat'][new Date().getDay()];
                    const isToday = day === todayKey;
                    return (
                      <div key={day} className={`flex justify-between items-center py-3 px-4 rounded-2xl ${isToday ? 'font-bold' : ''}`}
                        style={{ backgroundColor: isToday ? th.primary + '12' : 'transparent' }}>
                        <div className="flex items-center gap-2">
                          {isToday && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: th.primary }} />}
                          <span className="text-sm" style={{ color: isToday ? th.primary : th.text, opacity: isToday ? 1 : 0.7 }}>
                            {DAY_LABELS[day]}
                          </span>
                        </div>
                        <span className="text-sm font-semibold" style={{ color: h?.closed ? '#ef4444' : isToday ? th.primary : th.text }}>
                          {h?.closed ? 'Closed' : (h?.open && h?.close) ? `${h.open} – ${h.close}` : '—'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="rounded-3xl p-8" style={{ backgroundColor: th.bg }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: th.primary + '15' }}>
                  <Phone size={18} style={{ color: th.primary }} />
                </div>
                <h3 className="font-black text-xl" style={{ color: th.text }}>Get in Touch</h3>
              </div>
              <div className="space-y-3">
                {(data.phone || data.mobileno) && (
                  <a href={`tel:${data.phone || data.mobileno}`}
                    className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:scale-[1.02]"
                    style={{ borderColor: th.text + '10', backgroundColor: th.cardColor }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: th.primary + '15' }}>
                      <Phone size={16} style={{ color: th.primary }} />
                    </div>
                    <div>
                      <p className="text-xs opacity-50 mb-0.5" style={{ color: th.text }}>Phone</p>
                      <p className="font-bold text-sm" style={{ color: th.text }}>{data.phone || data.mobileno}</p>
                    </div>
                  </a>
                )}
                {data.whatsapp && (
                  <a href={`https://wa.me/${data.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:scale-[1.02]"
                    style={{ borderColor: '#22c55e20', backgroundColor: '#f0fdf4' }}>
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-green-600 opacity-70 mb-0.5">WhatsApp</p>
                      <p className="font-bold text-sm text-green-700">Chat with us</p>
                    </div>
                  </a>
                )}
                {data.address && (
                  <div className="flex items-start gap-4 p-4 rounded-2xl border"
                    style={{ borderColor: th.text + '10', backgroundColor: th.cardColor }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: th.primary + '15' }}>
                      <MapPin size={16} style={{ color: th.primary }} />
                    </div>
                    <div>
                      <p className="text-xs opacity-50 mb-0.5" style={{ color: th.text }}>Address</p>
                      <p className="font-medium text-sm leading-relaxed" style={{ color: th.text }}>{data.address}</p>
                    </div>
                  </div>
                )}
                {/* Social */}
                {(data.instagramUrl || data.facebookUrl) && (
                  <div className="flex gap-3 pt-2">
                    {data.instagramUrl && (
                      <a href={data.instagramUrl} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm text-white hover:opacity-90 transition-all"
                        style={{ background: 'linear-gradient(135deg,#f97316,#ec4899,#8b5cf6)' }}>
                        <InstagramIcon /> Instagram
                      </a>
                    )}
                    {data.facebookUrl && (
                      <a href={data.facebookUrl} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all">
                        <FacebookIcon /> Facebook
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      {data.mapEmbed && (
        <section className="h-96 relative overflow-hidden">
          <iframe src={data.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" />
        </section>
      )}

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6" style={{ backgroundColor: th.bg }}>
        <div className="max-w-4xl mx-auto rounded-3xl p-12 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${th.primary}, ${th.secondary})` }}>
          <div className="absolute top-[-40px] right-[-40px] w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute bottom-[-30px] left-[-30px] w-28 h-28 rounded-full bg-white/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Come dine with us!</h2>
            <p className="text-white/80 text-lg mb-8">Visit us and scan the QR code at your table to browse our full menu and place your order</p>
            {data.whatsapp && (
              <a href={`https://wa.me/${data.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-lg bg-white hover:scale-105 transition-transform shadow-2xl"
                style={{ color: th.primary }}>
                <MessageCircle size={20} /> Reserve via WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 border-t" style={{ backgroundColor: th.navBg, borderColor: th.text + '10' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {logoSrc
                ? <img src={logoSrc} alt={data.restroname} className="w-10 h-10 rounded-xl object-cover" />
                : <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: th.primary }}>
                    <UtensilsCrossed className="text-white" size={16} />
                  </div>
              }
              <div>
                <p className="font-black" style={{ color: th.text }}>{data.restroname}</p>
                {data.tagline && <p className="text-xs opacity-50" style={{ color: th.text }}>{data.tagline}</p>}
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button onClick={() => navigate(menuUrl)} className="flex items-center gap-1 font-semibold hover:opacity-80" style={{ color: th.primary }}>
                <ExternalLink size={13} /> Menu
              </button>
              {data.instagramUrl && <a href={data.instagramUrl} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: th.text }}>Instagram</a>}
              {data.facebookUrl && <a href={data.facebookUrl} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: th.text }}>Facebook</a>}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-xs opacity-30" style={{ borderColor: th.text + '15', color: th.text }}>
            Powered by Q-Menu • {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}

const radiusPx = { sharp: '4px', rounded: '14px', pill: '999px' };
