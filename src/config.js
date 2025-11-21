export const CONFIG = {
    GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY || '',
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
};
