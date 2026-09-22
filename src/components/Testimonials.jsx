import { motion } from 'motion/react'
import Reveal from './Reveal'
import { STUDIO } from '../constants'

// Real Google reviews for Swordsman Tattoo Studio Legian (4.9★, 258 reviews
// as of research), pulled from THIS location's own Google Maps listing
// (Jl. Raya Legian No.398). An earlier version of this file used reviews
// from a different, incorrectly-identified listing (No.466) — replaced.
// Hayden's, Teresa's, and Kelly's were auto-translated by Google from
// Indonesian; restored to natural English (meaning-faithful, not guaranteed
// verbatim). The Dutch review is translated from Dutch. Replace with exact
// text from the studio's Google Business dashboard when available.
const REVIEWS = [
  {
    name: 'Hayden Bramwell',
    meta: '4 months ago',
    text: "Completed my full outer arm sleeve over 2 days with Herman. He's absolutely brilliant! So much of it hand-drawn and the results are amazing. Definitely coming back to finish the inner part!",
  },
  {
    name: 'Teresa Mesch',
    meta: '4 months ago',
    text: 'Mike and his crew were amazing today. Getting my 2nd tattoo and I was so nervous. Thank you all for making me laugh and creating lasting memories — the result is beautiful, simple but right on point.',
  },
  {
    name: 'Kelly Evans',
    meta: '4 months ago',
    text: 'My partner and I came in for tattoos. The shop is great, the people are fantastic and so friendly! We\'ll be back next time we\'re here. Great work!',
  },
  {
    name: 'Google reviewer',
    meta: '1 year ago',
    text: "Asked for really thin lines, true fine line work, and this is the result — turned out super nice. Tattooed by Eka. Also just super lovely people, thank you!",
  },
]

// Rotate the review list so each column starts at a different card — keeps every
// column full and offset even though there are only a handful of real reviews.
const rotate = (arr, n) => [...arr.slice(n), ...arr.slice(0, n)]

function ReviewCard({ review }) {
  return (
    <figure className="bg-ink-soft border border-bone/10 p-6">
      <div className="flex gap-1 text-blood-bright text-sm mb-3" aria-label="5 stars">
        ★★★★★
      </div>
      <blockquote className="text-sm text-bone-dim leading-relaxed mb-4">
        "{review.text}"
      </blockquote>
      <figcaption className="text-xs uppercase tracking-widest text-bone">
        {review.name} <span className="text-bone-dim/60">· {review.meta}</span>
      </figcaption>
    </figure>
  )
}

function Column({ reviews, duration, className = '' }) {
  return (
    <div className={`relative h-[560px] overflow-hidden ${className}`}>
      <motion.div
        animate={{ y: '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-28 md:py-36 overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_800px]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blood-bright mb-4">
            Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-bone mb-4">
            {STUDIO.rating}★ from {STUDIO.reviewCount} reviews
          </h2>
          <p className="text-bone-dim text-sm">
            What clients say after the ink settles —{' '}
            <a
              href={STUDIO.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blood-bright"
            >
              read them on Google
            </a>
            .
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Column reviews={rotate(REVIEWS, 0)} duration={30} />
          <Column reviews={rotate(REVIEWS, 1)} duration={38} className="hidden sm:block" />
          <Column reviews={rotate(REVIEWS, 2)} duration={34} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
