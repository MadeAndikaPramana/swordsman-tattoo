import { motion, useReducedMotion } from 'motion/react'

// Site-wide living backdrop: slow-drifting blurred "liquid" blobs behind all
// content. Pure CSS transforms (GPU compositor) — no canvas or rAF loop, so it
// coexists with the hero WebGL shader without starving the main thread.
// Sections are translucent so this glows through everywhere.

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute w-[55vw] h-[55vw] rounded-full bg-blood/[0.08] blur-[100px]"
        style={{ top: '-15%', left: '-10%' }}
        animate={
          reduceMotion
            ? undefined
            : { x: ['0%', '25%', '5%', '0%'], y: ['0%', '20%', '45%', '0%'], scale: [1, 1.25, 0.9, 1] }
        }
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[45vw] h-[45vw] rounded-full bg-blood-bright/[0.06] blur-[90px]"
        style={{ bottom: '-20%', right: '-10%' }}
        animate={
          reduceMotion
            ? undefined
            : { x: ['0%', '-30%', '-10%', '0%'], y: ['0%', '-25%', '10%', '0%'], scale: [1, 0.85, 1.2, 1] }
        }
        transition={{ duration: 46, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full bg-blood/[0.05] blur-[110px] left-1/2 top-1/3 -translate-x-1/2"
        animate={
          reduceMotion
            ? undefined
            : { x: ['-10%', '15%', '-5%', '-10%'], y: ['0%', '30%', '10%', '0%'], scale: [1, 1.15, 0.95, 1] }
        }
        transition={{ duration: 52, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />
    </div>
  )
}
