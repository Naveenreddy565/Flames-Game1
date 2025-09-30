// api/log.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;
  const SCRIPT_KEY = process.env.SCRIPT_KEY;

  const payload = { ...req.body, key: SCRIPT_KEY };

  try {
    const r = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await r.text();
    return res.status(200).json({ message: 'Forwarded', appsResponse: text });
  } catch (err) {
    console.error('Forward error', err);
    return res.status(500).json({ message: 'Forward failed', error: err.toString() });
  }
}
