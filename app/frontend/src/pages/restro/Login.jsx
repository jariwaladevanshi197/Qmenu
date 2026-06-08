import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import api from "../../lib/api";
import toast from "react-hot-toast";
import { Eye, EyeOff, Phone, Users, ArrowRight, UtensilsCrossed } from "lucide-react";

export default function RestroLogin() {
  const [mode, setMode] = useState("restro");
  const [form, setForm] = useState({ mobileno: "", username: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let data;
      if (mode === "restro") {
        const res = await api.post("/auth/restro/login", { mobileno: form.mobileno, password: form.password });
        data = res.data;
      } else {
        const res = await api.post("/staff/login", { username: form.username, password: form.password });
        data = res.data;
      }
      setAuth(data.token, data.user);
      navigate(data.user?.staffRole === "kitchen" ? "/restro/kitchen" : "/restro/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — branding panel */}
      <div className="hidden lg:flex w-1/2 flex-col items-center justify-center p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)" }}>
        <div className="absolute top-[-100px] right-[-100px] w-80 h-80 rounded-full bg-white/10" />
        <div className="absolute bottom-[-60px] left-[-60px] w-60 h-60 rounded-full bg-white/10" />

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl mb-6 shadow-2xl">
            <UtensilsCrossed className="text-primary-500" size={32} />
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Q-Menu</h1>
          <p className="text-white/80 text-lg mb-10">Restaurant Management Portal</p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "📋", label: "Live Orders" },
              { icon: "🍽️", label: "Menu Builder" },
              { icon: "📊", label: "Sales Reports" },
              { icon: "🔔", label: "Waiter Alerts" },
              { icon: "🎨", label: "Custom Themes" },
              { icon: "👥", label: "Staff Mgmt" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2">
                <span className="text-lg">{icon}</span>
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-3"
              style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
              <UtensilsCrossed className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-black text-gray-900">Q-Menu</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
              <p className="text-gray-500 text-sm mt-1">Sign in to manage your restaurant</p>
            </div>

            {/* Mode toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              <button onClick={() => setMode("restro")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${mode === "restro" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}>
                <Phone size={14} /> Restaurant Owner
              </button>
              <button onClick={() => setMode("staff")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${mode === "staff" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}>
                <Users size={14} /> Staff Member
              </button>
            </div>

            <form onSubmit={submit} className="space-y-5">
              {mode === "restro" ? (
                <div>
                  <label className="label">Mobile Number</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-gray-400 border-r border-gray-200 pr-2.5">
                      <Phone size={14} />
                      <span className="text-xs font-medium">+91</span>
                    </div>
                    <input className="input pl-16" type="tel" value={form.mobileno}
                      onChange={(e) => setForm({ ...form, mobileno: e.target.value.replace(/\D/g,"") })}
                      placeholder="10-digit mobile number" maxLength={10} required autoFocus />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="label">Staff Username</label>
                  <input className="input" value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    placeholder="Enter your username" required autoFocus />
                </div>
              )}

              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input className="input pr-11" type={showPw ? "text" : "password"}
                    value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Enter password" required />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all">
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }} disabled={loading}>
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

          </div>
        </div>
      </div>
    </div>
  );
}
