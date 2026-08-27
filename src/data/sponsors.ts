export interface Sponsor {
  id: string
  name: string
  tier: 'title' | 'gold' | 'silver' | 'bronze' | 'community'
  website?: string
  logo?: string
  description?: string
  logoBg?: string
}

export const sponsors: Sponsor[] = [
  {
    id: 'carr-excavating',
    name: 'Carr Excavating',
    tier: 'gold',
    website: 'https://carrexcavatinglandscaping.com/',
    logo: '/images/sponsors/carr-excavating.png',
    logoBg: 'bg-gray-100',
  },
  {
    id: 'crazy-craigs',
    name: "Crazy Craig's",
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/crazy-craigs.png',
  },
  {
    id: 'jerrys-heating-cooling',
    name: "Jerry's Heating & Cooling",
    tier: 'gold',
    website: 'https://jerrysheatcool.com/',
    logo: '/images/sponsors/jerrys-heating-cooling.png',
    logoBg: 'bg-gray-100',
  },
  {
    id: 'jocks-and-socks',
    name: 'Jocks and Socks',
    tier: 'gold',
    website: 'https://grandvillageshops.com/shops/specialty/jocks-and-socks',
    logo: '/images/sponsors/jocks-and-socks.png',
    logoBg: 'bg-gray-900',
  },
  {
    id: 'ozarks-concrete-coatings',
    name: 'Ozarks Concrete Coatings',
    tier: 'gold',
    website: 'https://ozarksconcretecoatings.com',
    logo: '/images/sponsors/logo-with-number.png',
  },
  {
    id: 'on-the-ball-sports',
    name: 'On The Ball Sports',
    tier: 'gold',
    website: 'https://www.ontheballsportsstore.com/',
    logo: '/images/sponsors/on-the-ball-sports.webp',
  },
]

export const sponsorTiers = {
  title: { label: 'Title Sponsor', color: 'text-brand-gold', size: 'large' },
  gold: { label: 'Gold Sponsors', color: 'text-brand-gold', size: 'medium' },
  silver: { label: 'Silver Sponsors', color: 'text-gray-400', size: 'medium' },
  bronze: { label: 'Bronze Sponsors', color: 'text-amber-600', size: 'small' },
  community: { label: 'Community Partners', color: 'text-gray-500', size: 'small' },
}
