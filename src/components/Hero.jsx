import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { STUDIO } from '../constants'
import ShaderBackground from './ShaderBackground'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* animated shader backdrop over a static-gradient fallback, dimmed for
          legibility. The whole block is masked to fade out at the bottom so the
          hero reveals the SAME site-wide ambient backdrop the next section sits
          on — no opaque-to-transparent color step, so the sections blend. */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_58%,transparent_94%)] [-webkit-mask-image:linear-gradient(to_bottom,black_58%,transparent_94%)]"
      >
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(179,18,28,0.28),_transparent_60%)]" />
        <ShaderBackground className="absolute inset-0" />
        <div className="absolute inset-0 bg-ink/45" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-bone/20 text-xs uppercase tracking-[0.2em] text-bone-dim mb-8"
        >
          <span className="text-blood-bright">★ {STUDIO.rating}</span>
          <span className="w-1 h-1 rounded-full bg-bone-dim" />
          Legian, Kuta, Bali
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[15vw] md:text-[7.5rem] leading-[0.85] tracking-wide text-bone"
        >
          SWORDSMAN
          <br />
          <span className="text-blood-bright">TATTOO</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-bone-dim text-base md:text-lg font-light"
        >
          Custom tattoos & piercing in the heart of Legian. Fine line to bold
          traditional — every piece cut clean, healed strong.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/book"
            className="px-8 py-3.5 bg-blood text-bone text-sm uppercase tracking-widest font-semibold hover:bg-blood-bright transition-colors"
          >
            Book a Session
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-3.5 border border-bone/30 text-bone text-sm uppercase tracking-widest font-semibold hover:border-bone transition-colors"
          >
            See Our Work
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone-dim"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-bone-dim"
        />
      </motion.div>
    </section>
  )
}
