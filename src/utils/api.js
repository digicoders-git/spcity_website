const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://spcity-backend.onrender.com/api';

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

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

export const authAPI = {
  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: credentials,
  }),
};
