import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import PlaceholderImage from './PlaceholderImage'
import { PORTFOLIO } from '../data/portfolio'

const teaser = PORTFOLIO.filter((p) => p.id % 2 === 1).slice(0, 6)

export default function GalleryTeaser() {
  return (
    <section id="gallery" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-bone">
              Recent Work
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-sm uppercase tracking-widest text-bone-dim hover:text-blood-bright transition-colors"
          >
            View Full Portfolio →
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4">
          {teaser.map((it, i) => (
            <Reveal key={it.id} delay={i * 0.08}>
              <motion.div
                whileHover="hover"
                initial="rest"
                className="group relative h-[260px] overflow-hidden"
              >
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <PlaceholderImage label={it.style} src={it.src} className="absolute inset-0" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent flex items-end p-5 pointer-events-none">
                  <span className="text-bone text-sm uppercase tracking-widest">{it.style}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-bone-dim/60">
          Photos above are placeholder stock shots — swap in real portfolio work when ready.
        </p>
      </div>
    </section>
  )
}
