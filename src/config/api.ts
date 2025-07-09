import axios, { AxiosError } from 'axios';
import router from '@/router';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 60000,
  headers: {
    Client_id: import.meta.env.VITE_CLIENT_ID,
    Client_secret: import.meta.env.VITE_CLIENT_SECRET,
  },
});

api.interceptors.request.use((config) => {
  const token = getCookie('access_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const reloadStatusCodes = [401, 403, 422, 429];

const excludeRoutes = ['/auth/v2/login'];

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && reloadStatusCodes.includes(error.response.status)) {
      const url = error.config?.url;
      if (!url || !excludeRoutes.some((route) => url.includes(route))) {
        removeCookie();
        removeAuthenticated();
        router.push('/');
        return;
      }
    }
    return Promise.reject(error);
  }
);

export default api;

export function removeCookie(_name = 'access_token') {
  // document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  // TODO fazer implementação do logout no servidor
}

export function saveAuthenticated() {
  localStorage.setItem('isAuthenticated', 'true');
}

export function isAuthenticated(): boolean {
  return localStorage.getItem('isAuthenticated') === 'true';
}

export function removeAuthenticated() {
  localStorage.removeItem('isAuthenticated');
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}
