import { BRANCHES } from './data/branches'

const primary = BRANCHES.find((b) => b.id === 'legian')

// Primary studio identity for the whole site (hero, JSON-LD, contact links,
// etc). Sourced from the Legian branch's own Google Maps listing
// (Jl. Raya Legian No.398) — NOT the No.466 listing this site originally
// used, which turned out to be the wrong address for this business.
export const STUDIO = {
  name: 'Swordsman Tattoo Studio',
  location: 'Bali',
  rating: primary.rating,
  address: primary.address,
  hours: primary.hours,
  phoneDisplay: primary.phoneDisplay,
  whatsapp: primary.whatsapp,
  email: 'swordsmantattoostudiobali@gmail.com',
  instagram: 'https://www.instagram.com/swordsmantattoostudiobali/',
  instagramHandle: '@swordsmantattoostudiobali',
  mapsLink: primary.mapsLink,
  mapsEmbed: primary.mapsEmbed,
  reviewCount: primary.reviewCount,
}

export const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Team', href: '/team' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Visit', href: '/#location' },
]
