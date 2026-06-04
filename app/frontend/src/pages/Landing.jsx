import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, QrCode, Bell, BarChart2, Palette, Users, ShieldCheck, Smartphone, ArrowRight, Check, Star, ChevronRight } from 'lucide-react';

const FEATURES = [
  { icon: QrCode,      title: 'QR Code Menus',        desc: 'Each table gets a unique QR code. Customers scan and browse your full digital menu instantly.',  color: '#f97316' },
  { icon: Bell,        title: 'Real-time Orders',      desc: 'Orders appear live on your dashboard the moment customers place them. No delays.',              color: '#3b82f6' },
  { icon: Palette,     title: 'Custom Themes',         desc: 'Design your menu with your brand colors, fonts and style. Make it uniquely yours.',             color: '#8b5cf6' },
  { icon: BarChart2,   title: 'Sales Analytics',       desc: 'Daily revenue charts, top-selling items, hourly trends. Know your business inside out.',        color: '#10b981' },
  { icon: Users,       title: 'Staff Management',      desc: 'Add multiple staff accounts with role-based access. Manager, Cashier, and Staff roles.',        color: '#f59e0b' },
  { icon: Smartphone,  title: 'Mobile First',          desc: 'Customers browse on their phone. Restaurant admin works perfectly on any screen size.',         color: '#ec4899' },
  { icon: ShieldCheck, title: 'Multi-language',        desc: 'Display menu in English, Gujarati and Hindi. Auto-translation when adding items.',              color: '#06b6d4' },
  { icon: Bell,        title: 'Waiter Call System',    desc: 'Customers tap one button to call a waiter. Staff get instant alerts with table number.',        color: '#84cc16' },
];

const STEPS = [
  { num: '01', title: 'Create your restaurant',  desc: 'Super admin sets up your account with your details, subscription plan and branding theme.' },
  { num: '02', title: 'Build your menu',         desc: 'Add categories, items with photos, prices and multilingual names. Translations happen automatically.' },
  { num: '03', title: 'Print table QR codes',    desc: 'Generate unique QR codes for each table. Print and place them. Customers scan to browse.' },
  { num: '04', title: 'Receive orders live',     desc: 'Orders come in real-time. Confirm, prepare and complete with one click. Invoice prints automatically.' },
];

const PLANS = [
  {
    name: 'Mega',
    price: '₹1,999',
    period: '/month',
    color: '#8b5cf6',
    popular: true,
    features: ['QR code digital menu', 'Unlimited tables', 'Live order management', 'Custom theme & branding', 'Full sales reports & analytics', 'Staff management (10 users)', 'Waiter call system', 'Invoice & printing', 'PDF menu upload', 'Customer feedback system'],
  },
  {
    name: 'Mega + Web',
    price: '₹2,999',
    period: '/month',
    color: '#f97316',
    features: ['Everything in Mega', 'Dedicated restaurant website', 'Online presence & SEO', 'Custom domain support', 'Priority support', 'Unlimited staff accounts', 'Advanced analytics dashboard', 'Multi-branch support'],
  },
  {
    name: 'Custom',
    price: "Let's talk",
    period: '',
    color: '#0f172a',
    custom: true,
    features: ['Everything in Mega + Web', 'Tailored features for your business', 'Custom integrations', 'Dedicated account manager', 'White-label solution', 'Custom staff limit', 'SLA-backed support', 'On-site training & setup'],
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center">
              <UtensilsCrossed className="text-white" size={18} />
            </div>
            <span className="text-xl font-black text-gray-900">Q-Menu</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/restro/login')}
              className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
              Login
            </button>
            <button onClick={() => navigate('/restro/login')}
              className="text-sm font-semibold text-white px-4 py-2 rounded-xl transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center relative">
        {/* Background blobs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10" />
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-60 -z-10" />

        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Digital Menu Platform for Restaurants
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
          Your restaurant menu,{' '}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
            gone digital
          </span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Replace paper menus with beautiful QR-based digital menus. Customers scan, browse and order.
          You manage everything from a single dashboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button onClick={() => navigate('/restro/login')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>
            Start for free <ArrowRight size={18} />
          </button>
          <button onClick={() => navigate('/admin/login')}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-gray-700 text-lg bg-gray-100 hover:bg-gray-200 transition-all">
            Admin Login <ChevronRight size={18} />
          </button>
        </div>

        {/* Hero mock UI */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-4 shadow-2xl">
            {/* Mock browser bar */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-gray-700 rounded-md h-6 flex items-center px-3">
                <span className="text-gray-400 text-xs">qmenu.app/menu/cafe-xyz</span>
              </div>
            </div>
            {/* Mock menu UI */}
            <div className="bg-white rounded-xl overflow-hidden text-left">
              <div className="bg-orange-500 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-white rounded-full" />
                  <span className="text-white font-bold">Café Milano</span>
                </div>
                <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🛒</span>
                </div>
              </div>
              <div className="flex gap-2 px-4 py-3 bg-gray-50 overflow-hidden">
                {['All','Starters','Mains','Drinks','Desserts'].map((c,i) => (
                  <div key={c} className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: i===0?'#f97316':'#f3f4f6', color: i===0?'#fff':'#374151' }}>
                    {c}
                  </div>
                ))}
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                {[
                  { name:'Paneer Tikka', price:'₹180', emoji:'🥗' },
                  { name:'Chicken Biryani', price:'₹320', emoji:'🍗' },
                  { name:'Mango Lassi', price:'₹80', emoji:'🥤' },
                ].map((item) => (
                  <div key={item.name} className="bg-gray-50 rounded-xl p-3">
                    <div className="text-3xl mb-2 text-center">{item.emoji}</div>
                    <p className="text-xs font-semibold text-gray-800 truncate">{item.name}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-orange-500">{item.price}</span>
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '10,000+', label: 'Orders processed' },
            { num: '500+',    label: 'Restaurants' },
            { num: '8',       label: 'Theme styles' },
            { num: '3',       label: 'Languages supported' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-3xl font-black text-white mb-1">{num}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary-500 uppercase tracking-wide">Features</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2">Everything your restaurant needs</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">From digital menus to real-time orders, staff management to analytics — all in one platform.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: color + '15' }}>
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wide">How it works</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Up and running in minutes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="bg-white rounded-2xl p-7 border border-gray-100 flex gap-5">
                <span className="text-4xl font-black text-gray-100 shrink-0 leading-none">{num}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary-500 uppercase tracking-wide">Pricing</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2">Simple, transparent pricing</h2>
          <p className="text-gray-500 mt-3">No hidden fees. Cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map(({ name, price, period, color, popular, custom, features }) => (
            <div key={name}
              className={`rounded-2xl border-2 overflow-hidden transition-all flex flex-col ${popular ? 'shadow-2xl ring-2' : custom ? 'shadow-xl' : 'border-gray-200 shadow-sm hover:shadow-md'}`}
              style={popular ? { borderColor: color, ringColor: color } : custom ? { borderColor: '#334155', background: 'linear-gradient(160deg,#0f172a 0%,#1e293b 100%)' } : {}}>

              {/* Badge */}
              {popular && (
                <div className="text-center py-2.5 text-white text-xs font-bold tracking-widest uppercase"
                  style={{ background: `linear-gradient(90deg,${color},${color}bb)` }}>
                  ⭐ &nbsp;MOST POPULAR
                </div>
              )}
              {custom && (
                <div className="text-center py-2.5 text-white text-xs font-bold tracking-widest uppercase"
                  style={{ background: 'linear-gradient(90deg,#f97316,#8b5cf6)' }}>
                  ✦ &nbsp;FULLY CUSTOMISABLE
                </div>
              )}

              <div className={`p-7 flex flex-col flex-1 ${custom ? '' : 'bg-white'}`}>
                <h3 className={`font-black text-xl mb-1 ${custom ? 'text-white' : 'text-gray-900'}`}>{name}</h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-black" style={{ color: custom ? '#f97316' : color, fontSize: custom ? '2rem' : '2.5rem' }}>
                    {price}
                  </span>
                  {period && <span className="text-gray-400 text-sm">{period}</span>}
                </div>
                {custom && (
                  <p className="text-gray-400 text-xs mb-6">Pricing based on your requirements</p>
                )}
                {!custom && <div className="mb-6" />}

                {/* Features */}
                <ul className="space-y-3 mb-7 flex-1">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${custom ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Check size={15} className="mt-0.5 shrink-0" style={{ color: custom ? '#f97316' : color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                {custom ? (
                  <a href="mailto:contact@qmenu.app"
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg,#f97316,#8b5cf6)', color: '#fff' }}>
                    📩 Contact Us
                  </a>
                ) : (
                  <button onClick={() => navigate('/restro/login')}
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                    style={popular
                      ? { background: `linear-gradient(135deg,${color},${color}cc)`, color: '#fff' }
                      : { backgroundColor: '#f3f4f6', color: '#374151' }}>
                    Get started
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-6 mb-24">
        <div className="max-w-4xl mx-auto rounded-3xl p-12 text-center text-white overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg,#f97316 0%,#ea580c 50%,#dc2626 100%)' }}>
          <div className="absolute top-[-60px] right-[-60px] w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute bottom-[-40px] left-[-40px] w-36 h-36 rounded-full bg-white/10" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4">Ready to go digital?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of restaurants already using Q-Menu to streamline orders and delight customers.
            </p>
            <button onClick={() => navigate('/restro/login')}
              className="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:shadow-lg hover:scale-105 transition-all">
              Start now — it's free to try 🚀
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary-500 rounded-xl flex items-center justify-center">
              <UtensilsCrossed className="text-white" size={15} />
            </div>
            <span className="font-black text-gray-900">Q-Menu</span>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Q-Menu. Built for modern restaurants.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <button onClick={() => navigate('/restro/login')} className="hover:text-gray-900 transition-colors">Restaurant Login</button>
            <button onClick={() => navigate('/admin/login')} className="hover:text-gray-900 transition-colors">Admin</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
