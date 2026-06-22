// Central Configuration for API Base URL
// Automatically detects environment and switches between local development and production Render deployment.
export const API_BASE_URL = 
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000'
    : 'https://nsa-backend-rgcv.onrender.com';
