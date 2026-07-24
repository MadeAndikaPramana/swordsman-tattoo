import Reveal from './Reveal'
import { STUDIO } from '../constants'

const contactRows = [
  { label: 'Address', value: STUDIO.address, href: STUDIO.mapsLink },
  { label: 'Hours', value: STUDIO.hours },
  { label: 'WhatsApp', value: STUDIO.phoneDisplay, href: STUDIO.whatsapp },
  { label: 'Email', value: STUDIO.email, href: `mailto:${STUDIO.email}` },
  { label: 'Instagram', value: STUDIO.instagramHandle, href: STUDIO.instagram },
]

export default function Location() {
  return (
    <section
      id="location"
      className="py-28 md:py-36 bg-gradient-to-b from-transparent via-ink-soft/85 to-transparent [content-visibility:auto] [contain-intrinsic-size:auto_900px]"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-bone mb-10">
            Come say hi.
          </h2>

          <dl className="divide-y divide-bone/10 border-y border-bone/10">
            {contactRows.map((row) => (
              <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-4">
                <dt className="w-28 shrink-0 text-[11px] uppercase tracking-widest text-bone-dim">
                  {row.label}
                </dt>
                <dd>
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-bone hover:text-blood-bright transition-colors"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-bone">{row.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={STUDIO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 px-8 py-3.5 bg-blood text-bone text-sm uppercase tracking-widest font-semibold hover:bg-blood-bright transition-colors"
          >
            Book via WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.15} className="min-h-[360px]">
          <iframe
            title="Swordsman Tattoo Studio Bali location"
            src={STUDIO.mapsEmbed}
            className="w-full h-full min-h-[360px] border border-bone/10 grayscale contrast-125 invert-[0.92] hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
