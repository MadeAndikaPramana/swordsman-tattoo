import Reveal from './Reveal'
import SpotlightCard from './SpotlightCard'

const services = [
  {
    num: '01',
    title: 'Custom Tattoo',
    desc: 'One-on-one consultation to design a piece built entirely around your idea.',
  },
  {
    num: '02',
    title: 'Fine Line',
    desc: 'Delicate, precise linework — minimalist designs with lasting clarity.',
  },
  {
    num: '03',
    title: 'Traditional & Bold',
    desc: 'Classic flash-style tattoos with strong lines and saturated color.',
  },
  {
    num: '04',
    title: 'Realism',
    desc: 'Portrait and detailed realism work executed with careful shading.',
  },
  {
    num: '05',
    title: 'Cover-Up',
    desc: 'Reworking old tattoos into something you\'ll want to show off again.',
  },
  {
    num: '06',
    title: 'Piercing',
    desc: 'Professional piercing services in a clean, sterile environment.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 md:py-36 bg-gradient-to-b from-transparent via-ink-soft/85 to-transparent backdrop-blur-[2px]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-bone">
            Services
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06} className="bg-ink-soft h-full">
              <SpotlightCard className="h-full p-8 flex flex-col gap-6">
                <span className="font-display text-2xl text-blood-bright">{s.num}</span>
                <div>
                  <h3 className="text-lg font-semibold text-bone mb-2">{s.title}</h3>
                  <p className="text-sm text-bone-dim leading-relaxed">{s.desc}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
