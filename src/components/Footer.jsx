import { Link } from 'react-router-dom'
import { STUDIO, NAV_LINKS } from '../constants'
import NavLink from './NavLink'

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-bali.png" alt="Swordsman Tattoo Bali" className="h-8 w-8" />
          <img src="/logo-legian.png" alt="Swordsman Tattoo Legian" className="h-8 w-8" />
          <img src="/logo-kuta.png" alt="Swordsman Tattoo Kuta" className="h-8 w-8" />
        </Link>

        <ul className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-bone-dim">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} className="hover:text-blood-bright transition-colors">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="text-xs text-bone-dim/60">
          © {new Date().getFullYear()} {STUDIO.name} · Legian, Bali
        </p>
      </div>
    </footer>
  )
}
