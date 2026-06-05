import axios from 'axios';

// In production (Vercel) API is on same domain at /api
// In local dev it proxies through Vite to localhost:5000
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('qmenu_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('qmenu_token');
      localStorage.removeItem('qmenu_user');
      window.location.href = '/';
    }
    return Promise.reject(err);
  }
);

export default api;
