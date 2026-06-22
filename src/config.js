// Central Configuration for API Base URL.
// Local development uses the backend on port 5000.
// Production can override the value with VITE_API_BASE_URL; otherwise it uses the Render backend.
const isLocalHost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (isLocalHost ? 'http://localhost:5000' : 'https://nsa-backend-t6i9.onrender.com');
