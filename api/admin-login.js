// POST { password } -> { ok: true } or 401. No GitHub calls here — this only
// lets the admin page gate its UI before the real (mutating) request.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) {
    res.status(500).json({ error: 'ADMIN_PASSWORD is not configured on the server.' })
    return
  }

  const { password } = req.body || {}
  if (password !== adminPassword) {
    res.status(401).json({ error: 'Incorrect password.' })
    return
  }

  res.status(200).json({ ok: true })
}
