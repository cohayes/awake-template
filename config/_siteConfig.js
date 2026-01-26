/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms.js'

/**
 * General Site configurations
 */
export default {
  siteName: 'AI Data Annotation + Python QA',
  tagline: 'I create high-quality labeled data and evaluation sets for LLMs. I’m strong on rubric-following, edge cases, and writing clear rationales — and I use Python to audit labels, spot inconsistencies, and summarize results.',
  featureImage: '/uploads/sunset_unk.jpeg',
  logo: 'logo.svg', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  mainMenu: [
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'Writing',
      link: '/writing'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Resume',
      link: '/resume'
    },
    {
      name: 'Roadmap',
      link: '/roadmap'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Categories
  categories: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for categories if set here)
    theme: null // See card.theme (can be unique for categories if set here)
  },

  // Posts
  posts: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    displayAuthor: true,
    date: {
      display: true
    },
    perRow: 1,
    perPage: 6
  }
}

export const CMS = theCMS
