import { motion } from 'motion/react'
import Reveal from './Reveal'
import PlaceholderImage from './PlaceholderImage'
import { STUDIO } from '../constants'

const stats = [
  { value: `${STUDIO.rating}★`, label: 'Google Rating' },
  { value: '10+', label: 'Years Combined Exp.' },
  { value: '1000+', label: 'Tattoos Done' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <PlaceholderImage
            label="Studio Photo"
            src="/images/studio.jpg"
            className="relative aspect-[4/5] w-full"
          />
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden sm:block absolute -bottom-6 -right-6 bg-blood px-6 py-5"
          >
            <p className="font-display text-4xl text-bone">{STUDIO.rating}★</p>
            <p className="text-[10px] uppercase tracking-widest text-bone/80">Google Reviews</p>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">
              About the Studio
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-bone mb-6">
              Ink built on precision,
              <br />
              trust &amp; craft.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-bone-dim leading-relaxed mb-6">
              Nestled on Jl. Raya Legian, Swordsman Tattoo Studio brings together
              seasoned artists working across fine line, traditional, realism and
              custom design. Every session runs on single-use needles, hospital-grade
              sterilization, and an eye for detail — whether it's your first tattoo
              or your fifteenth.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-bone-dim leading-relaxed mb-10">
              Walk-ins welcome, custom consultations by appointment. Piercing services
              also available.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="grid grid-cols-3 gap-6 border-t border-bone/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-bone">{s.value}</p>
                <p className="text-[11px] uppercase tracking-widest text-bone-dim mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
