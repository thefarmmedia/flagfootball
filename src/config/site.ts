// ============================================================
// SITE CONFIGURATION — edit here to update the whole site
// ============================================================

export const siteConfig = {
  // Organization identity
  organization: {
    name: 'Missouri EPIC',
    fullName: 'Missouri EPIC Flag Football',
    tagline: 'Southwest Missouri\'s Premier Flag Football Organization',
    description:
      'Missouri EPIC offers NFL FLAG, Girls Flag Football, and competitive 7v7 programs for youth athletes in the Southwest Missouri region.',
    founded: '2018',
    location: 'Southwest Missouri',
  },

  // Production domain — update when your custom domain is connected
  // ⚠️  Do NOT hard-code a .netlify.app URL here
  siteUrl: 'https://DOMAIN-GOES-HERE.com',

  // Registration links — update each season
  registration: {
    nflFlag: '',
    girlsFlag: '',
    sevenOnSeven: '',
    // NFL FLAG national program finder — already set
    nflFlagFinder: 'https://play.nflflag.com/?zip=65616',
    // Volunteer / coach applications
    coachApplication: '',
  },

  // Social media profiles
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
  },

  // Contact information
  contact: {
    phone: '',
    email: '',
    address: 'Southwest Missouri',
  },

  // Analytics — leave blank to disable tracking
  analytics: {
    ga4Id: '',
    metaPixelId: '',
    gscVerification: '',
  },

  // Season information — update each year
  season: {
    current: '2025',
    nflFlag: {
      ageGroups: ['6–7', '8–10', '11–12', '13–14'],
      registrationOpen: false,
      registrationOpenDate: 'Spring 2025',
      seasonStart: 'Summer 2025',
    },
    girlsFlag: {
      ageGroups: ['8–10', '11–12', '13–14'],
      registrationOpen: false,
      registrationOpenDate: 'Spring 2025',
      seasonStart: 'Summer 2025',
    },
    sevenOnSeven: {
      tryoutDate: '',
      registrationOpen: false,
      registrationOpenDate: 'TBD',
    },
  },
}
