import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { usePermission } from '../../hooks/usePermission';
import { LayoutDashboard, Store, CreditCard, Palette, Users, LogOut, UtensilsCrossed, Menu } from 'lucide-react';
import { useState } from 'react';

const ALL_LINKS = [
  { to: '/admin/dashboard',   label: 'Dashboard',   icon: LayoutDashboard, section: 'dashboard',   action: 'view' },
  { to: '/admin/restaurants', label: 'Restaurants', icon: Store,           section: 'restaurants', action: 'view' },
  { to: '/admin/payments',    label: 'Payments',    icon: CreditCard,      section: 'payments',    action: 'view' },
  { to: '/admin/themes',      label: 'Themes',      icon: Palette,         section: 'themes',      action: 'view' },
  { to: '/admin/admins',      label: 'Admins',      icon: Users,           section: 'admins',      action: 'view' },
];

const ROLE_LABELS = { super_admin: 'Super Admin', manager: 'Manager', viewer: 'Viewer', superadmin: 'Super Admin' };

export default function SuperAdminLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const can = usePermission();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = ALL_LINKS.filter((l) => can(l.section, l.action));

  const handleLogout = () => { logout(); navigate('/admin/login'); };

  const Sidebar = ({ mobile = false }) => (
    <div className={`flex flex-col h-full ${mobile ? '' : ''}`}>
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center">
            <UtensilsCrossed className="text-white" size={18} />
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-tight">Q-Menu</p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
            }>
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="px-3 py-4 border-t border-gray-100">
        <div className="px-3 py-2 mb-2">
          <p className="text-sm font-medium text-gray-700">{user?.fullname}</p>
          <p className="text-xs text-gray-400">{user?.username}</p>
          <span className="inline-block mt-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary-50 text-primary-600 capitalize">
            {ROLE_LABELS[user?.role] || user?.role}
          </span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 flex-col bg-white border-r border-gray-100 shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed left-0 top-0 h-full w-60 bg-white z-50">
            <Sidebar mobile />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="lg:hidden bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)} className="p-1.5 rounded-lg hover:bg-gray-100">
            <Menu size={20} className="text-gray-600" />
          </button>
          <span className="font-semibold text-gray-900">Q-Menu Admin</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
