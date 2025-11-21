export const CONFIG = {
    GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
};

// Debug: Log API key status (first 10 chars only for security)
console.log('API Key configured:', CONFIG.GEMINI_API_KEY ? `${CONFIG.GEMINI_API_KEY.substring(0, 10)}...` : 'MISSING');
console.log('Environment:', import.meta.env.MODE);
