import portfolioData from './portfolio.json'

// The fixed set of tattoo styles the site filters by. Adding photos through
// /admin only ever picks from this list — it isn't itself editable there,
// since changing the taxonomy is a bigger structural change than adding a
// photo.
export const STYLES = ['Fine Line', 'Traditional', 'Realism', 'Blackwork', 'Cover-Up', 'Piercing']

export const styleToSlug = (style) => style.toLowerCase().replace(/\s+/g, '-')

// Lives in portfolio.json (not inline here) so the /admin serverless
// function can read + rewrite it as plain JSON via the GitHub API, without
// needing to safely parse/regenerate JS source.
export const PORTFOLIO = portfolioData.items
