// ============================================================
// SITE CONFIGURATION — edit here to update the whole site
// ============================================================

export const siteConfig = {
  // Organization identity
  organization: {
    name: 'Missouri EPIC',
    fullName: 'Missouri EPIC Flag Football',
    tagline: 'BE EPIC.',
    subTagline: 'PLAY EPIC. GROW EPIC.',
    description:
      'Missouri EPIC offers NFL FLAG, Girls Flag Football, and competitive 7v7 programs for youth athletes in Southwest Missouri at Ballparks of America in Branson, MO.',
    founded: '2018',
    location: 'Ballparks of America, Branson, Missouri',
    womanOwned: true,
    owner: 'Terri Crisler',
  },

  // Production domain
  siteUrl: 'https://missouriepic.com',

  // Registration links
  registration: {
    nflFlag: 'https://app.playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0zMzUwLTE3OTIxNjgyMTJ8bkpmdnJFKzc5Q2ZtdUZkaVpnTDRpSFdNc0pKQm41UG9jYkgxemtwOUsrWT0=',
    girlsFlag: 'https://app.playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0zMzUwLTE3OTIxNjgyMTJ8bkpmdnJFKzc5Q2ZtdUZkaVpnTDRpSFdNc0pKQm41UG9jYkgxemtwOUsrWT0=',
    sevenOnSeven: 'https://app.playmetrics.com/signup?clubToken=TG9naW4tQ2x1Yi52MS0zMzUwLTE3OTIxNjgyMTJ8bkpmdnJFKzc5Q2ZtdUZkaVpnTDRpSFdNc0pKQm41UG9jYkgxemtwOUsrWT0=',
    nflFlagFinder: 'https://share.google/aqqeNhH1RHDru4I3e',
    coachApplication: '/contact',
  },

  // NFL FLAG Merchandise
  merchandise: {
    shopUrl: 'https://shop.nflflag.com/',
    discountCode: 'MOEPICFLAG',
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
    ownerName: 'Terri Crisler',
    phone: '417-559-0669',
    email: 'missouriepic@aol.com',
    address: 'Ballparks of America, Branson, Missouri',
  },

  // Analytics
  analytics: {
    ga4Id: '',
    metaPixelId: '',
    gscVerification: '',
  },

  // Season information
  season: {
    current: '2026',
    nflFlag: {
      name: 'Fall League 2026',
      ageGroups: ['8U', '10U', '12U', '14U', '17U'],
      coedGroups: ['8U', '10U'],
      registrationOpen: true,
      gameDay: 'Tuesday Nights',
      dates: '9/27 – 11/3',
      weeks: '6 Weeks of Game Time',
      location: 'Ballparks of America, Branson, MO',
      openToAllSchools: true,
      flagsIncluded: true,
      jerseyIncluded: true,
      pricing: {
        earlyBird: 250,
        regular: 300,
        earlyBirdDeadline: 'September 4',
        regularDeadline: 'September 11',
        registrationCloses: 'September 11',
      },
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
