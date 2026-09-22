// Real data for all 3 Swordsman Tattoo locations, sourced directly from each
// location's own Google Maps listing (address, phone, rating, review count)
// plus artist names actually mentioned by name in that location's reviews —
// never invented. Legian (Jl. Raya Legian No.398) is the primary/default
// branch this site represents; Kuta and Nar Nar Goon (Victoria, Australia)
// are sister locations shown via the branch switcher (Team page) and the
// About section carousel.
//
// Note on Nar Nar Goon: a public review on that listing states the Victoria
// and Bali studios have different owners/artists. Included here per an
// explicit decision after flagging this — confirm directly with the studio
// if this needs re-checking.
export const BRANCHES = [
  {
    id: 'legian',
    short: 'Legian',
    name: 'Swordsman Tattoo Studio Legian',
    country: 'Bali, Indonesia',
    address: 'Jl. Raya Legian No.398, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361',
    phoneDisplay: '+62 878-4297-5436',
    whatsapp: 'https://wa.me/6287842975436',
    hours: 'Open daily · 10:00 – 21:00',
    rating: 4.9,
    reviewCount: 258,
    mapsLink: 'https://www.google.com/maps/search/Swordsman+Tattoo+Studio+Legian+Jl+Raya+Legian+No.398',
    mapsEmbed:
      'https://www.google.com/maps?q=Swordsman+Tattoo+Studio+Legian,+Jl.+Raya+Legian+No.398,+Legian,+Kuta,+Bali&output=embed',
    team: [
      {
        name: 'Herman',
        role: 'Tattoo Artist',
        bio: 'Known for detailed, largely hand-drawn sleeve work — clients regularly come back to finish the rest of the piece.',
      },
      {
        name: 'Mike',
        role: 'Tattoo Artist',
        bio: 'Puts nervous first-timers at ease while delivering clean, precise results.',
      },
      {
        name: 'Eka',
        role: 'Tattoo Artist',
        bio: 'Specialises in fine line work — praised for thin, precise linework that heals beautifully.',
      },
    ],
  },
  {
    id: 'kuta',
    short: 'Kuta',
    name: 'Swordsman Tattoo Studio Kuta',
    country: 'Bali, Indonesia',
    address: 'Jl. Bakung Sari No.39, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361',
    phoneDisplay: '+62 881-4821-160',
    whatsapp: 'https://wa.me/628814821160',
    hours: 'Open daily · 10:00 – 21:00',
    rating: 4.9,
    reviewCount: 73,
    mapsLink: 'https://www.google.com/maps/search/Swordsman+Tattoo+Studio+Kuta+Jl+Bakung+Sari',
    mapsEmbed:
      'https://www.google.com/maps?q=Swordsman+Tattoo+Studio+Kuta,+Jl.+Bakung+Sari+No.39,+Kuta,+Bali&output=embed',
    team: [
      {
        name: 'Hermon',
        role: 'Tattoo Artist',
        bio: 'Regularly finishes pieces ahead of schedule without compromising on detail.',
      },
    ],
  },
  {
    id: 'nar-nar-goon',
    short: 'Nar Nar Goon, AU',
    name: 'Swordsman Tattoo Nar Nar Goon',
    country: 'Victoria, Australia',
    address: '3 Main St, Nar Nar Goon VIC 3812, Australia',
    phoneDisplay: '+61 412 775 557',
    whatsapp: 'https://wa.me/61412775557',
    hours: 'Closed Mondays & Tuesdays — check Instagram for hours',
    rating: 4.4,
    reviewCount: 33,
    mapsLink: 'https://www.google.com/maps/search/Swordsman+Tattoo+Nar+Nar+Goon',
    mapsEmbed:
      'https://www.google.com/maps?q=Swordsman+Tattoo+Nar+Nar+Goon,+3+Main+St,+Nar+Nar+Goon+VIC,+Australia&output=embed',
    instagram: 'https://www.instagram.com/swordsman_victoria/',
    team: [
      {
        name: 'Aiden',
        role: 'Tattoo Artist',
        bio: 'Takes the time to design cover-ups carefully and put nervous clients at ease.',
      },
    ],
  },
]
