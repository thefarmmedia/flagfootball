// ============================================================
// SITE CONFIGURATION — edit here to update the whole site
// ============================================================

export const siteConfig = {
  // Organization identity
  organization: {
    name: 'Missouri EPIC',
    fullName: 'Missouri EPIC Flag Football',
    tagline: "Be the Future of Flag Football.",
    subTagline: 'Play EPIC.',
    description:
      'Missouri EPIC offers NFL FLAG, Girls Flag Football, and competitive 7v7 programs for youth athletes in Southwest Missouri at Ballparks of America in Branson, MO.',
    founded: '2018',
    location: 'Ballparks of America, Branson, Missouri',
    womanOwned: true,
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
    address: 'Ballparks of America, Branson, Missouri',
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
      name: 'Fall League',
      ageGroups: ['8U', '10U', '12U', '14U', '17U'],
      coedGroups: ['8U', '10U'],
      registrationOpen: true,
      gameDay: 'Tuesday Nights',
      dates: '9/27 – 11/3',
      weeks: '6 Weeks of Game Time',
      location: 'Ballparks of America, Branson, MO',
      openToAllSchools: true,
      flagsIncluded: true,
    },
    girlsFlag: {
      ageGroups: ['8U', '10U', '12U', '14U'],
      registrationOpen: false,
      registrationOpenDate: 'Coming Soon',
      seasonStart: 'TBD',
    },
    sevenOnSeven: {
      tryoutDate: '',
      registrationOpen: false,
      registrationOpenDate: 'TBD',
    },
  },
}
