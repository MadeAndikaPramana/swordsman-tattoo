import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Reveal from './Reveal'
import PlaceholderImage from './PlaceholderImage'
import { STUDIO } from '../constants'
import { BRANCHES } from '../data/branches'

const stats = [
  { value: `${STUDIO.rating}★`, label: 'Google Rating' },
  { value: '10+', label: 'Years Combined Exp.' },
  { value: '1000+', label: 'Tattoos Done' },
]

const AUTO_SWIPE_MS = 1000

function BranchCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const branch = BRANCHES[index]

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % BRANCHES.length), AUTO_SWIPE_MS)
    return () => clearInterval(t)
  }, [paused])

  // Only pause on hover for mouse/trackpad users — on touch devices a tap can
  // fire a synthetic mouseenter with no matching mouseleave, which would
  // otherwise freeze the carousel permanently after the first tap.
  const pauseIfMouse = (e) => {
    if (e.pointerType === 'mouse') setPaused(true)
  }
  const resumeIfMouse = (e) => {
    if (e.pointerType === 'mouse') setPaused(false)
  }

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden"
      onPointerEnter={pauseIfMouse}
      onPointerLeave={resumeIfMouse}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={branch.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <PlaceholderImage label={`${branch.short} Studio`} src={branch.src} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent flex items-end p-5 pointer-events-none">
            <div>
              <p className="text-bone text-sm uppercase tracking-widest">{branch.short}</p>
              <p className="text-bone-dim/70 text-xs">{branch.country}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* dots */}
      <div className="absolute top-4 right-4 flex gap-1.5 z-10">
        {BRANCHES.map((b, i) => (
          <button
            key={b.id}
            onClick={() => setIndex(i)}
            aria-label={`Show ${b.short}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === index ? 'bg-bone' : 'bg-bone/30 hover:bg-bone/60'
            }`}
          />
        ))}
      </div>

      <motion.div
        key={`badge-${branch.id}`}
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.4 }}
        className="hidden sm:block absolute -bottom-6 -right-6 bg-blood px-6 py-5 z-10"
      >
        <p className="font-display text-4xl text-bone">{branch.rating}★</p>
        <p className="text-[10px] uppercase tracking-widest text-bone/80">{branch.reviewCount} reviews</p>
      </motion.div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 [content-visibility:auto] [contain-intrinsic-size:auto_900px]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <BranchCarousel />
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
              With 3 studios across Bali — Legian, Kuta, and our original
              location — Swordsman brings together seasoned artists working
              across fine line, traditional,
              realism and custom design. Every session runs on single-use
              needles, hospital-grade sterilization, and an eye for detail — whether it's
              your first tattoo or your fifteenth.
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
