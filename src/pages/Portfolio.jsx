import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Reveal from '../components/Reveal'
import PlaceholderImage from '../components/PlaceholderImage'
import { PORTFOLIO, STYLES } from '../data/portfolio'
import { STUDIO } from '../constants'

const FILTERS = ['All', ...STYLES]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.style === active)

  return (
    <section className="pt-36 pb-28 md:pb-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">Portfolio</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-bone mb-5">
            Full Gallery
          </h1>
          <p className="text-bone-dim">
            Browse work by style, or follow{' '}
            <a
              href={STUDIO.instagram}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blood-bright"
            >
              {STUDIO.instagramHandle}
            </a>{' '}
            for the latest pieces.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                active === f
                  ? 'bg-blood border-blood text-bone'
                  : 'border-bone/20 text-bone-dim hover:border-bone/50 hover:text-bone'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((it) => (
              <motion.div
                key={it.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  className="group relative h-[280px] overflow-hidden"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-xs text-bone-dim/60">
          Photos above are placeholder stock shots — swap in real portfolio work when ready.
        </p>
      </div>
    </section>
  )
}
