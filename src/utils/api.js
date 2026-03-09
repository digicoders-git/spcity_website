const API_BASE_URL = 'http://127.0.0.1:5000/api';
const RENDER_API_URL = 'https://spcity-backend.onrender.com/api';

const apiRequest = async (endpoint, options = {}) => {
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    }
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  // Try local first, then fallback to render
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    return await response.json();
  } catch (localError) {
    console.warn("Local API failed, trying Render...", localError);
    try {
      const response = await fetch(`${RENDER_API_URL}${endpoint}`, config);
      return await response.json();
    } catch (renderError) {
      console.error("All API requests failed", renderError);
      throw new Error("Could not connect to any server. Please check your internet or start the backend.");
    }
  }
};

export const authAPI = {
  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: credentials,
  }),
};
