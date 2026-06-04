import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import api from '../../lib/api';
import toast from 'react-hot-toast';
import { Eye, EyeOff, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SuperAdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/auth/superadmin/login', form);
      setAuth(data.token, data.user);
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Invalid credentials');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — branding panel */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-primary-500/10" />
        <div className="absolute bottom-[-60px] right-[-60px] w-56 h-56 rounded-full bg-primary-500/10" />

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-3xl mb-6 shadow-2xl">
            <span className="text-white text-4xl font-black">Q</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Q-Menu</h1>
          <p className="text-gray-400 text-lg mb-10">Super Admin Control Panel</p>

          <div className="space-y-4 text-left">
            {['Manage all restaurants', 'Control subscriptions & billing', 'Configure themes & branding', 'View platform analytics'].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <ArrowRight size={11} className="text-white" />
                </div>
                <span className="text-gray-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — login form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-3">
              <span className="text-white text-2xl font-black">Q</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900">Q-Menu</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={18} className="text-primary-500" />
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-wide">Super Admin</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
              <p className="text-gray-500 text-sm mt-1">Sign in to manage your platform</p>
            </div>

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="label">Username</label>
                <input className="input" value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  placeholder="Enter username" autoFocus required />
              </div>

              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input className="input pr-11" type={showPw ? 'text' : 'password'}
                    value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Enter password" required />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all">
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }} disabled={loading}>
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <>Sign In <ArrowRight size={16} /></>
                )}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-6">
              Restaurant owner?{' '}
              <a href="/restro/login" className="text-primary-500 hover:underline font-medium">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
