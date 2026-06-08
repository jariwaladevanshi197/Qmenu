import { useAuthStore } from '../store/auth';

export function usePermission() {
  const { user } = useAuthStore();
  return function can(section, action) {
    if (!user) return false;
    if (user.isRoot) return true;
    // Legacy superadmin tokens (pre-RBAC) get full access
    if (user.role === 'superadmin') return true;
    return user.permissions?.[section]?.[action] ?? false;
  };
}
