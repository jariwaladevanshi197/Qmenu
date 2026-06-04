import { create } from 'zustand';

const stored = () => {
  try { return JSON.parse(localStorage.getItem('qmenu_user')); } catch { return null; }
};

export const useAuthStore = create((set) => ({
  token: localStorage.getItem('qmenu_token') || null,
  user: stored(),

  setAuth: (token, user) => {
    localStorage.setItem('qmenu_token', token);
    localStorage.setItem('qmenu_user', JSON.stringify(user));
    set({ token, user });
  },

  logout: () => {
    localStorage.removeItem('qmenu_token');
    localStorage.removeItem('qmenu_user');
    set({ token: null, user: null });
  },
}));
