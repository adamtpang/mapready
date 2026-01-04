// Vercel serverless function to expose Gemini API key
// The GEMINI_API_KEY env var is set in Vercel dashboard

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({
        gemini: process.env.GEMINI_API_KEY || '',
        psi: process.env.PSI_API_KEY || 'AIzaSyBjsQkGsTD0igGUCrFuCtvwYgP5CAfr6ao'
    });
}
