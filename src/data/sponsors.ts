export interface Sponsor {
  id: string
  name: string
  tier: 'title' | 'gold' | 'silver' | 'bronze' | 'community'
  website?: string
  logo?: string
  description?: string
}

export const sponsors: Sponsor[] = [
  {
    id: 'carr-excavating',
    name: 'Carr Excavating',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/carr-excavating.png',
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
    website: '',
    logo: '/images/sponsors/jerrys-heating-cooling.jpg',
  },
  {
    id: 'jocks-and-socks',
    name: 'Jocks and Socks',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/jocks-and-socks.png',
  },
  {
    id: 'logo-with-number',
    name: 'Our Sponsor',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/logo-with-number.png',
  },
  {
    id: 'on-the-ball-sports',
    name: 'On The Ball Sports',
    tier: 'gold',
    website: '',
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
