import { motion } from 'motion/react'
import Reveal from './Reveal'
import { STUDIO } from '../constants'

// Real Google reviews for Swordsman Tattoo Studio Bali (4.9★, 179 reviews).
// Pulled from the studio's public Google Maps listing.
// NOTE: Google's logged-out view only exposes a few reviews. Victoria's and
// Jane's were originally written in English but only Google's auto-translation
// was available, so their text is restored to natural English (meaning-faithful,
// not guaranteed verbatim). Arca's is translated from Indonesian. Replace with
// exact text from the studio's Google Business dashboard when available.
const REVIEWS = [
  {
    name: 'Victoria Brne',
    meta: '1 month ago',
    text: "I've been here three times now and always had an amazing experience. Ake is my artist and I'm so happy with his work — Cindy and Nancy were super helpful too. Everything clean and comfortable, highly recommended!",
  },
  {
    name: 'Jane Freer',
    meta: '6 months ago',
    text: "So happy with Eka's work today — I love it. Friendly, clean studio and highly recommended for anyone wanting a tattoo while in Bali. Thank you 😊",
  },
  {
    name: 'Google reviewer',
    meta: '1 year ago',
    text: 'Excellent work, did exactly as I shown them! Amazing tattoo artists! Thank you for some great work.',
  },
  {
    name: 'Arca Fabian',
    meta: '2 years ago',
    text: "Great spot and the staff are so warm and friendly. And the tattoos are excellent, of course — don't forget to drop by when you're in Bali!",
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
            {STUDIO.rating}★ from 179 reviews
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
