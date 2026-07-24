import { useState } from 'react'
import Reveal from '../components/Reveal'
import FlowPaths from '../components/FlowPaths'
import { TEAM } from '../data/team'
import { STYLES } from '../data/portfolio'
import { STUDIO } from '../constants'

const ARTIST_OPTIONS = ['No preference', ...TEAM.filter((t) => t.artist).map((t) => t.name)]

export default function Book() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    artist: ARTIST_OPTIONS[0],
    style: STYLES[0],
    date: '',
    message: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      `Hi Swordsman Tattoo, I'd like to book a session.`,
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      `Preferred artist: ${form.artist}`,
      `Style: ${form.style}`,
      form.date ? `Preferred date: ${form.date}` : null,
      form.message ? `Details: ${form.message}` : null,
    ].filter(Boolean)

    const url = `${STUDIO.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full bg-transparent border border-bone/20 px-4 py-3 text-bone placeholder:text-bone-dim/50 focus:outline-none focus:border-blood-bright transition-colors'

  return (
    <section className="relative pt-36 pb-28 md:pb-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 text-blood-bright/60">
        <FlowPaths />
      </div>
      <div className="relative max-w-2xl mx-auto px-6">
        <Reveal className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">Book</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-bone mb-5">
            Book a Session
          </h1>
          <p className="text-bone-dim">
            Fill this out and we'll open WhatsApp with your details ready to send — no account,
            no backend, just a direct message to the studio.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-bone-dim mb-2">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-bone-dim mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  required
                  value={form.contact}
                  onChange={update('contact')}
                  className={inputClass}
                  placeholder="+62..."
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-bone-dim mb-2">
                  Preferred Artist
                </label>
                <select value={form.artist} onChange={update('artist')} className={inputClass}>
                  {ARTIST_OPTIONS.map((a) => (
                    <option key={a} value={a} className="bg-ink">
                      {a}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-bone-dim mb-2">
                  Style
                </label>
                <select value={form.style} onChange={update('style')} className={inputClass}>
                  {STYLES.map((s) => (
                    <option key={s} value={s} className="bg-ink">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-bone-dim mb-2">
                Preferred Date (optional)
              </label>
              <input
                type="date"
                value={form.date}
                onChange={update('date')}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-bone-dim mb-2">
                Tell us about the piece
              </label>
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={4}
                className={inputClass}
                placeholder="Size, placement, reference ideas..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-blood text-bone text-sm uppercase tracking-widest font-semibold hover:bg-blood-bright transition-colors"
            >
              Continue on WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
