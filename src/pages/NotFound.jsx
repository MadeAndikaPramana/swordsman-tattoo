import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <Reveal className="text-center max-w-md">
        <p className="font-display text-7xl text-blood-bright mb-4">404</p>
        <h1 className="font-display text-3xl text-bone mb-4">Page Not Found</h1>
        <p className="text-bone-dim mb-8">
          That page doesn't exist — but the ink is real. Head back home or browse our work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3.5 bg-blood text-bone text-sm uppercase tracking-widest font-semibold hover:bg-blood-bright transition-colors"
          >
            Back Home
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-3.5 border border-bone/30 text-bone text-sm uppercase tracking-widest font-semibold hover:border-bone transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
