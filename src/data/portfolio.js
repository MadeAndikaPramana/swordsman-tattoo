import portfolioData from './portfolio.json'

// Body-placement categories, not tattoo art styles — chosen deliberately so
// a non-technical owner can categorize their own uploads at a glance (which
// body part is obviously easier to identify than which art style). Cover-Up
// and Piercing stay as their own categories since they're distinct services
// customers look for specifically, not a body location.
export const PLACEMENTS = ['Arm', 'Leg', 'Back', 'Chest', 'Hand', 'Cover-Up', 'Piercing']

export const placementToSlug = (placement) => placement.toLowerCase().replace(/\s+/g, '-')

// Lives in portfolio.json (not inline here) so the /admin serverless
// function can read + rewrite it as plain JSON via the GitHub API, without
// needing to safely parse/regenerate JS source.
export const PORTFOLIO = portfolioData.items
