import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { useEffect, useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../lib/api";
import { subscribeToOrders, subscribeToWaiterCalls } from "../../lib/realtime";
import toast from "react-hot-toast";
import {
  LayoutDashboard, BookOpen, Table2, ClipboardList,
  History, BarChart2, MessageSquare, Settings,
  LogOut, UtensilsCrossed, Menu, Bell, Users,
} from "lucide-react";

const radiusPx = { sharp: "2px", rounded: "10px", pill: "999px" };

// Lighten a hex color by mixing with white
const lighten = (hex, pct = 0.85) => {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.round(((n >> 16) & 255) + (255 - ((n >> 16) & 255)) * pct);
  const g = Math.round(((n >> 8)  & 255) + (255 - ((n >> 8)  & 255)) * pct);
  const b = Math.round(( n        & 255) + (255 - ( n        & 255)) * pct);
  return `rgb(${r},${g},${b})`;
};

export default function RestroLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const qc = useQueryClient();

  // Fetch profile to get theme
  const { data: profile } = useQuery({
    queryKey: ["restro-profile"],
    queryFn: () => api.get("/restaurant/profile").then((r) => r.data),
  });

  // Apply theme CSS variables to admin panel
  const theme = profile?.theme;
  const th = useMemo(() => ({
    primary:   theme?.primaryColor    || "#f97316",
    navBg:     theme?.navBg           || "#ffffff",
    btnText:   theme?.buttonTextColor || "#ffffff",
    text:      theme?.textColor       || "#111827",
    radius:    radiusPx[theme?.borderRadius] || "10px",
    font:      theme?.fontFamily      || "Inter",
    bg:        theme?.bgColor         || "#f9fafb",
  }), [theme]);

  // Load Google Font for admin panel too
  useEffect(() => {
    if (!th.font || th.font === "Inter") return;
    const id = "qmenu-admin-font";
    let link = document.getElementById(id);
    if (!link) { link = document.createElement("link"); link.id = id; link.rel = "stylesheet"; document.head.appendChild(link); }
    link.href = `https://fonts.googleapis.com/css2?family=${th.font.replace(/ /g, "+")}:wght@400;500;600;700&display=swap`;
  }, [th.font]);

  // Inject theme primary color into CSS variables used by Tailwind btn-primary etc.
  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    // Override the Tailwind primary-* scale with theme color
    root.style.setProperty("--tw-primary", theme.primaryColor || "#f97316");
    // Also set the CSS vars used by admin buttons/inputs
    root.style.setProperty("--admin-primary",       theme.primaryColor    || "#f97316");
    root.style.setProperty("--admin-primary-light",  lighten(theme.primaryColor || "#f97316", 0.85));
    root.style.setProperty("--admin-btn-text",       theme.buttonTextColor || "#ffffff");
    root.style.setProperty("--admin-radius",         radiusPx[theme.borderRadius] || "10px");
    root.style.setProperty("--admin-nav-bg",         theme.navBg           || "#ffffff");
    root.style.setProperty("--admin-bg",             theme.bgColor         || "#f9fafb");

    // Inject a <style> tag that overrides btn-primary, input focus ring, etc.
    const styleId = "qmenu-admin-theme-overrides";
    let style = document.getElementById(styleId);
    if (!style) { style = document.createElement("style"); style.id = styleId; document.head.appendChild(style); }
    style.textContent = `
      .btn-primary { background-color: ${theme.primaryColor} !important; color: ${theme.buttonTextColor} !important; }
      .btn-primary:hover { filter: brightness(0.9); }
      .bg-primary-500 { background-color: ${theme.primaryColor} !important; }
      .text-primary-600 { color: ${theme.primaryColor} !important; }
      .text-primary-500 { color: ${theme.primaryColor} !important; }
      .bg-primary-50  { background-color: ${lighten(theme.primaryColor || "#f97316", 0.88)} !important; }
      .focus\\:ring-primary-500:focus { --tw-ring-color: ${theme.primaryColor}40 !important; }
      .focus\\:border-primary-400:focus { border-color: ${theme.primaryColor}80 !important; }
      .border-primary-400 { border-color: ${theme.primaryColor} !important; }
      .accent-primary-500 { accent-color: ${theme.primaryColor} !important; }
    `;

    return () => {
      root.style.removeProperty("--admin-primary");
      const s = document.getElementById(styleId);
      if (s) s.textContent = "";
    };
  }, [theme]);

  // Waiter call count
  const { data: waiterRequests = [] } = useQuery({
    queryKey: ["waiter-requests"],
    queryFn: () => api.get("/orders/waiter").then((r) => r.data),
    refetchInterval: 30000,
  });
  const pendingCount = waiterRequests.length;

  // Supabase Realtime — live order + waiter call notifications
  useEffect(() => {
    if (!user?.id) return;
    const unsubOrders = subscribeToOrders(
      user.id,
      (newOrder) => {
        toast.success(`New order — Table ${newOrder.tableid || '-'}`, { duration: 6000, icon: "🍽️" });
        qc.invalidateQueries(["active-orders"]);
        qc.invalidateQueries(["restro-stats"]);
      },
      () => {
        qc.invalidateQueries(["active-orders"]);
      }
    );
    const unsubWaiter = subscribeToWaiterCalls(user.id, (req) => {
      toast(`🔔 Waiter needed — Table #${req.tableid || 'Unknown'}`, { duration: 10000 });
      qc.invalidateQueries(["waiter-requests"]);
      qc.invalidateQueries(["restro-stats"]);
    });
    return () => { unsubOrders(); unsubWaiter(); };
  }, [user?.id, qc]);

  const handleLogout = () => { logout(); navigate("/restro/login"); };

  const links = [
    { to: "/restro/dashboard",     label: "Dashboard",    icon: LayoutDashboard },
    { to: "/restro/orders",        label: "Live Orders",  icon: ClipboardList },
    { to: "/restro/notifications", label: "Waiter Calls", icon: Bell, badge: pendingCount },
    { to: "/restro/menu",          label: "Menu",         icon: BookOpen },
    { to: "/restro/tables",        label: "Tables",       icon: Table2 },
    { to: "/restro/history",       label: "History",      icon: History },
    { to: "/restro/report",        label: "Report",       icon: BarChart2 },
    { to: "/restro/feedback",      label: "Feedback",     icon: MessageSquare },
    { to: "/restro/staff",         label: "Staff",        icon: Users },
    { to: "/restro/settings",      label: "Settings",     icon: Settings },
  ];

  const Sidebar = () => (
    <div className="flex flex-col h-full" style={{ backgroundColor: th.navBg, fontFamily: th.font + ", sans-serif" }}>
      {/* Logo */}
      <div className="px-5 py-5 border-b" style={{ borderColor: th.primary + "20" }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: th.primary }}>
            <UtensilsCrossed style={{ color: th.btnText }} size={18} />
          </div>
          <div className="min-w-0">
            <p className="font-bold leading-tight truncate text-sm" style={{ color: th.text }}>{user?.restroname}</p>
            <p className="text-xs opacity-50" style={{ color: th.text }}>Restaurant Admin</p>
          </div>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {links.map(({ to, label, icon: Icon, badge }) => (
          <NavLink key={to} to={to} onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-all rounded-lg"
            style={({ isActive }) => ({
              backgroundColor: isActive ? lighten(th.primary, 0.85) : "transparent",
              color:           isActive ? th.primary : th.text + "cc",
              borderRadius:    th.radius,
            })}>
            {({ isActive }) => (
              <>
                <Icon size={18} style={{ color: isActive ? th.primary : th.text + "80" }} />
                <span className="flex-1">{label}</span>
                {badge > 0 && (
                  <span className="w-5 h-5 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse"
                    style={{ backgroundColor: "#ef4444" }}>
                    {badge > 9 ? "9+" : badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t" style={{ borderColor: th.primary + "20" }}>
        <div className="px-3 py-2 mb-1">
          <p className="text-sm font-medium truncate" style={{ color: th.text }}>{user?.restroname}</p>
          <p className="text-xs opacity-40" style={{ color: th.text }}>{user?.slug}</p>
        </div>
        <button onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-sm transition-all rounded-lg hover:bg-red-50 hover:text-red-600"
          style={{ color: th.text + "99", borderRadius: th.radius }}>
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen" style={{ backgroundColor: th.bg, fontFamily: th.font + ", sans-serif" }}>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 flex-col shrink-0 shadow-sm"
        style={{ backgroundColor: th.navBg, borderRight: `1px solid ${th.primary}15` }}>
        <Sidebar />
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 h-full w-60 z-50 shadow-xl" style={{ backgroundColor: th.navBg }}>
            <Sidebar />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="lg:hidden px-4 py-3 flex items-center justify-between shadow-sm"
          style={{ backgroundColor: th.navBg, borderBottom: `1px solid ${th.primary}20` }}>
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-lg"
              style={{ backgroundColor: th.primary + "15", borderRadius: th.radius }}>
              <Menu size={20} style={{ color: th.primary }} />
            </button>
            <span className="font-semibold truncate" style={{ color: th.text }}>{user?.restroname}</span>
          </div>
          {pendingCount > 0 && (
            <button onClick={() => navigate("/restro/notifications")}
              className="relative p-2 rounded-lg"
              style={{ backgroundColor: "#fee2e2", borderRadius: th.radius }}>
              <Bell size={18} className="text-red-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {pendingCount}
              </span>
            </button>
          )}
        </header>

        <main className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: th.bg }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
